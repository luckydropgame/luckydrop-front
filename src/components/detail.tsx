import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Group,
  Image as MImage,
  Stack,
  Text,
  UnstyledButton,
  NumberInput,
  MantineProvider,
} from "@mantine/core";
import { NextPage } from "next";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import abi from "src/abi/abi.json";
import usdtAbi from "src/abi/usdt.test.json";

import GoBack from "./GoBack";
import TotalAwardPool from "./TotalAwardPool";
import { COUNTRY_TYPE } from "../common/constants";
import { useDetailStyles, useSiteStyles } from "../theme";
import { formatNumber, useDebounce } from "../common/utils";

const Banner = ({
  totalAward,
  gameId,
  gameInfo,
  banlance = 0,
  allowance = 0,
}) => {
  const { classes } = useDetailStyles();
  const basicClass = useSiteStyles().classes;
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const [myBet, setMyBet] = useState(1);
  const [myProfit, setMyProfit] = useState(0);
  const [couldBet, setCouldBet] = useState(false);
  const [activeButton, setActiveButton] = useState("team1");
  const [buttonText, setButtonText] = useState("CONNECT WALLET");
  const [needApproveToken, setNeedApproveToken] = useState(true);

  const currentReward =
    gameInfo[0].add(gameInfo[1]).add(gameInfo[2]).toString() / Math.pow(10, 18);
  const team1 = gameInfo[0].toString() / Math.pow(10, 18);
  const team2 = gameInfo[1].toString() / Math.pow(10, 18);
  const equal = gameInfo[2].toString() / Math.pow(10, 18);

  useEffect(() => {
    setButtonText(address && isConnected ? "BET" : "CONNECT WALLET");
  }, [address, isConnected]);

  useEffect(() => {
    if (myBet) {
      if (allowance < myBet) {
        setNeedApproveToken(true);
      } else {
        setNeedApproveToken(false);
      }
    }
  }, [allowance, myBet]);

  const approveConfig = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_USDT_ADDRESS,
    contractInterface: usdtAbi,
    functionName: "approve",
    enabled: !!address && needApproveToken,
    args: [
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      (myBet - allowance) * Math.pow(10, 18) + "",
    ],
  });

  const approveWrite = useContractWrite(approveConfig?.config);

  useWaitForTransaction({
    hash: approveWrite.data?.hash,
    onSuccess: () => {
      setCouldBet(true);
      betWrite?.write?.();
    },
  });

  const betConfig = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: "bet",
    enabled: !!address && !!myBet && couldBet,
    args: [gameId, activeButton, "1000000000000000000"],
  });

  const betWrite = useContractWrite(betConfig?.config);

  useWaitForTransaction({
    hash: betWrite.data?.hash,
    onSuccess: (data) => {
      console.log("data", data);
    },
  });

  useEffect(() => {
    getMyProfit(myBet);
  }, [activeButton, myBet]);

  const getMyProfit = useDebounce((val) => {
    if (val) {
      const newTotalReward = (currentReward + val) * 0.9;
      let odds = 0;
      switch (activeButton) {
        case "team1":
          odds = newTotalReward / (team1 + val);
          break;
        case "team2":
          odds = newTotalReward / (team2 + val);
          break;
        case "equal":
          odds = newTotalReward / (equal + val);
          break;
      }
      setMyProfit(odds * val);
    } else {
      setMyProfit(0);
    }
  }, 500);

  return (
    <Stack align="center" className={classes.bannerWrap} spacing={20}>
      <Center className={basicClass.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <GoBack />
      <TotalAwardPool title="THE TOTAL REWAED POOL" value={`$ ${totalAward}`} />
      <Stack align="center" className={classes.betDetailWrap} spacing={40}>
        <Text size="1.25rem">CURRENT REWARD POOL</Text>
        <Text size="1.6rem" color="#fba33c">
          {formatNumber(currentReward)} USDT
        </Text>
        <Group spacing={160}>
          <Stack align="center">
            <Text>START TIME</Text>
            <Text>soon...</Text>
          </Stack>
          <Stack align="center">
            <Text>END TIME</Text>
            <Text>soon...</Text>
          </Stack>
        </Group>
        <Group spacing={112}>
          <Stack align="center">
            <Center
              sx={() => ({
                width: "210px",
              })}
            >
              <MImage
                src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/${gameInfo[3]}`}
              ></MImage>
            </Center>
            <Text>{COUNTRY_TYPE[gameInfo[3]]}</Text>
          </Stack>
          <Text
            size={30}
            color="#46a9f1"
            style={{ position: "relative", top: "-30px" }}
          >
            VS
          </Text>
          <Stack align="center">
            <Center
              sx={() => ({
                width: "210px",
              })}
            >
              <MImage
                src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/${gameInfo[4]}`}
              ></MImage>
            </Center>
            <Text>{COUNTRY_TYPE[gameInfo[4]]}</Text>
          </Stack>
        </Group>
        <Group spacing={66}>
          <Stack align="center" spacing={14}>
            <Text size={14}>WIN</Text>
            <UnstyledButton
              className={classes.chooseButton}
              onClick={() => setActiveButton("team1")}
              style={{
                background:
                  activeButton === "team1"
                    ? "-webkit-gradient(linear,0% 4%, 0% 100%, from(#EA861A), to(#F53B19))"
                    : "#6223a6",
              }}
            >
              <Text size={16} color="#fcfaf7" align="center">
                {team1 !== 0 ? (currentReward * 0.9) / team1 : "+∞"}
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              {formatNumber(team1)} USDT betted
            </Text>
          </Stack>
          <Stack align="center" spacing={14}>
            <Text size={14}>DRAW</Text>
            <UnstyledButton
              className={classes.chooseButton}
              onClick={() => setActiveButton("team2")}
              style={{
                background:
                  activeButton === "team2"
                    ? "-webkit-gradient(linear,0% 4%, 0% 100%, from(#EA861A), to(#F53B19))"
                    : "#6223a6",
              }}
            >
              <Text size={16} color="#fcfaf7" align="center">
                {equal !== 0 ? (currentReward * 0.9) / equal : "+∞"}
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              {formatNumber(equal)} USDT betted
            </Text>
          </Stack>
          <Stack align="center" spacing={14}>
            <Text size={14}>WIN</Text>
            <UnstyledButton
              className={classes.chooseButton}
              onClick={() => setActiveButton("equal")}
              style={{
                background:
                  activeButton === "equal"
                    ? "-webkit-gradient(linear,0% 4%, 0% 100%, from(#EA861A), to(#F53B19))"
                    : "#6223a6",
              }}
            >
              <Text size={16} color="#fcfaf7" align="center">
                {team2 !== 0 ? (currentReward * 0.9) / team2 : "+∞"}
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              {formatNumber(team2)} USDT betted
            </Text>
          </Stack>
        </Group>
        <Stack spacing={14}>
          <Text>Total bet</Text>
          <Box
            sx={() => ({
              padding: "4px",
              backgroundColor: "#4b1089",
            })}
          >
            <Group spacing={0}>
              <MantineProvider
                inherit
                theme={{
                  components: {
                    Input: {
                      styles: (theme) => ({
                        input: {
                          borderColor: "red",
                          backgroundColor: "#1f1e59",
                          paddingRight: "60px",
                          paddingLeft: "10px",
                          fontSize: "14px",
                        },
                        rightSection: {
                          minWidth: "60px",
                          width: "60px",
                          padding: "0 10px",
                        },
                      }),
                    },
                  },
                }}
              >
                <NumberInput
                  min={1}
                  value={myBet}
                  placeholder="Your bet"
                  label=""
                  variant="unstyled"
                  hideControls
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value) =>
                    !Number.isNaN(parseFloat(value))
                      ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : ""
                  }
                  rightSection={<Text>USDT</Text>}
                  onChange={(val) => {
                    setMyBet(val);
                  }}
                />
              </MantineProvider>

              <UnstyledButton
                onClick={() => setMyBet(banlance)}
                sx={() => ({
                  height: "100%",
                  backgroundColor: "#4b1089",
                  padding: "0 12px",
                })}
              >
                <Text underline>Max</Text>
              </UnstyledButton>
            </Group>
          </Box>
          <Text size={13}>Profit: {myProfit.toFixed(3)} USDT</Text>
          <Center pt={16}>
            <UnstyledButton
              className={classes.mainButton}
              onClick={() => {
                if (address && isConnected) {
                  if (needApproveToken) {
                    approveWrite?.write?.();
                  } else {
                    setCouldBet(true);
                  }
                } else {
                  openConnectModal && openConnectModal();
                }
              }}
            >
              <Text color="#fefefd" align="center">
                {buttonText}
              </Text>
            </UnstyledButton>
          </Center>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Detail: NextPage<{ totalAward: string }> = ({ totalAward }) => {
  const router = useRouter();
  const { address } = useAccount();
  const [banlance, setBanlance] = useState(0);
  const [allowance, setAllowance] = useState(0);

  const [gameInfo, setGameInfo] = useState([
    ethers.BigNumber.from("0"),
    ethers.BigNumber.from("0"),
    ethers.BigNumber.from("0"),
    "",
    "",
    "",
    ethers.BigNumber.from("0"),
  ]);

  useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: "getGameInfo",
    args: router.query.param[1],
    watch: true,
    onSuccess: (data: any) => {
      setGameInfo(data);
    },
  });

  useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_USDT_ADDRESS,
    contractInterface: usdtAbi,
    functionName: "balanceOf",
    args: address,
    enabled: !!address,
    watch: true,
    onSuccess: (data) => {
      setBanlance(Number(data.toString()) / Math.pow(10, 18));
    },
  });

  useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_USDT_ADDRESS,
    contractInterface: usdtAbi,
    functionName: "allowance",
    args: [address, process.env.NEXT_PUBLIC_CONTRACT_ADDRESS],
    enabled: !!address,
    watch: true,
    onSuccess: (data) => {
      setAllowance(parseFloat(data.toString()) / Math.pow(10, 18));
    },
  });

  return (
    <div className="container">
      <Banner
        totalAward={totalAward}
        gameId={router.query.param[1]}
        gameInfo={gameInfo}
        banlance={banlance}
        allowance={allowance}
      />
      {/* {finish && } */}

      {/* <Log /> */}
      <style jsx>{`
        .container {
          padding-top: 60px;
          width: 100%;
          height: 100%;
          line-height: 24px;
        }
      `}</style>
    </div>
  );
};

export default Detail;
