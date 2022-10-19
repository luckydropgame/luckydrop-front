import {
  Grid,
  Group,
  Stack,
  Text,
  UnstyledButton,
  Image as MImage,
  Center,
  Tabs,
  SimpleGrid,
  Card,
} from "@mantine/core";
import Link from "next/link";
import { NextPage } from "next";
import { ethers } from "ethers";
import { Tweet } from "src/types";
import TextScroll from "./TextScroll";
import abi from "src/abi/abi.json";
import { useContractRead, useContractReads } from "wagmi";
import StyledTabs from "./StyledTabs/index";
import { useSiteStyles } from "src/theme";
import { useMediaQuery } from "@mantine/hooks";
import { becomeSponsorUrl, joinTwitterUrl } from "../common/constants";
import { useEffect, useState } from "react";

const Banner = () => {
  const { classes } = useSiteStyles();

  return (
    <Stack className={classes.bannerWrap}>
      <Stack className={classes.bannerTitle}>
        <MImage src="/home/banner/title.png" />
      </Stack>

      <Stack className={classes.bannerButtonGroup} space={0}>
        <Link href="/bet">
          <UnstyledButton className={classes.bannerButton} />
        </Link>

        <UnstyledButton className={classes.bannerTextButton}>
          <Text color="#fc9809" underline>
            How to start?
          </Text>
        </UnstyledButton>
      </Stack>

      <Stack
        sx={() => ({
          padding: "0 19%",
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: "60px",
        })}
      >
        <Grid grow gutter="sm">
          <Grid.Col span={4} md={2}>
            <Stack align="center">
              <Center className={classes.bannerImg}>
                <MImage src="/home/banner/icon-1.png" />
              </Center>
              <Text className={classes.bannerTip}>
                The fast and simple
                <br />
                way to invest crypto
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4} md={2}>
            <Stack align="center">
              <Center className={classes.bannerImg}>
                <MImage src="/home/banner/icon-2.png" />
              </Center>
              <Text className={classes.bannerTip}>
                Professional, safe and secure under <br />
                smart contract
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={4} md={2}>
            <Stack align="center">
              <Center className={classes.bannerImg}>
                <MImage src="/home/banner/icon-3.png" />
              </Center>
              <Text className={classes.bannerTip}>
                Unlimited maximum withdrawal amount <br />& Withdrawal In 24/7
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};

const FIFA = ({ info = [] }) => {
  const { classes } = useSiteStyles();
  let text = "UNCOMING...";
  for (let i = 0; i < 40; i++) {
    text = text + " " + "UNCOMING...";
  }

  return (
    <Stack spacing={0} className={classes.fifaWrap}>
      <TextScroll />
      <Stack
        sx={(theme) => ({
          background: "url('/bg.png') no-repeat",
          backgroundPosition: "left top",
          backgroundSize: "30%",
        })}
        spacing={0}
      >
        <Stack
          sx={() => ({
            padding: "20px 18%",
          })}
        >
          <StyledTabs defaultValue="fifa">
            <Tabs.List>
              <Tabs.Tab value="fifa">FIFA</Tabs.Tab>
              {/* <Tabs.Tab value="nba">NBA</Tabs.Tab>
              <Tabs.Tab value="...">...</Tabs.Tab> */}
            </Tabs.List>

            <Tabs.Panel value="fifa" pt={40} pb={60}>
              <SimpleGrid cols={4} spacing={24}>
                {info.map((item, index) => {
                  return (
                    <Card
                      key={`fifaitem_${index}`}
                      className={classes.fifaItem}
                    >
                      <Stack align="center">
                        <Group position="center">
                          <Center className={classes.fifaFlag}>
                            <MImage
                              src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/${item[3]}`}
                            ></MImage>
                          </Center>
                          <Text>VS</Text>
                          <Center className={classes.fifaFlag}>
                            <MImage
                              src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/${item[4]}`}
                            ></MImage>
                          </Center>
                        </Group>
                        <Text>2022/11/25 08:00</Text>
                        <Link href={`/bet/1/${item[7]}`}>
                          <UnstyledButton
                            className={classes.fifaJoin}
                          ></UnstyledButton>
                        </Link>
                      </Stack>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </Tabs.Panel>

            {/* <Tabs.Panel value="nba" pt="xs">
              Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value="..." pt="xs">
              Settings tab content
            </Tabs.Panel> */}
          </StyledTabs>
        </Stack>
      </Stack>
      <TextScroll />
    </Stack>
  );
};

const Info = () => {
  const { classes } = useSiteStyles();
  return (
    <Stack className={classes.infoWrap} align="center" spacing={28}>
      <Text
        pb={12}
        sx={(theme) => ({
          fontSize: "22.5px",
        })}
      >
        How you can invest your
      </Text>
      <Text
        pb={10}
        sx={(theme) => ({
          fontSize: "30px",
        })}
      >
        Money More Smartly
      </Text>
      <Text
        sx={(theme) => ({
          fontSize: "15px",
        })}
      >
        It's a simple way to start invest. You don't need a deep wallet to start
        behoof.
      </Text>
      <Text
        sx={(theme) => ({
          fontSize: "15px",
        })}
      >
        Connect wallet and let's began.
      </Text>

      <Group position="center" spacing={80} pt={25} pb={84}>
        <Stack align="center">
          <Center className={classes.infoItemIcon}>
            <MImage src="/home/info/icon-1.png"></MImage>
          </Center>
          <Text className={classes.infoItemText}>CONNECT WALLET</Text>
        </Stack>
        <Center className={classes.infoItemArrowRight}>
          <MImage src="/home/info/arrow-right.png"></MImage>
        </Center>
        <Stack align="center">
          <Center className={classes.infoItemIcon}>
            <MImage src="/home/info/icon-2.png"></MImage>
          </Center>
          <Text className={classes.infoItemText}>INVEST</Text>
        </Stack>
        <Center className={classes.infoItemArrowRight}>
          <MImage src="/home/info/arrow-right.png"></MImage>
        </Center>
        <Stack align="center">
          <Center className={classes.infoItemIcon}>
            <MImage src="/home/info/icon-3.png"></MImage>
          </Center>
          <Text className={classes.infoItemText}>GOT PROFIT</Text>
        </Stack>
      </Group>
      <Group position="apart" className={classes.infoFoot}>
        <Stack spacing={20}>
          <Center className={classes.infoFootTitle}>
            <MImage src="/home/info/title.png"></MImage>
          </Center>
          <Text size={14} align="left">
            Get Started Now, Create your personal account as a first step to{" "}
            <br />
            become a successful investor. Are you ready to start earning with
            us?
          </Text>
        </Stack>
        <Link href="/bet">
          <UnstyledButton className={classes.infoFootButton} />
        </Link>
      </Group>
    </Stack>
  );
};

const Ecosystem = () => {
  const { classes } = useSiteStyles();
  return (
    <Stack className={classes.ecoWrap} align="center">
      <Text color="white" align="center" className={classes.heroTitle}>
        Ecosystem
      </Text>
      <SimpleGrid cols={3} spacing={40}>
        <Stack align="center" spacing={40}>
          <Center className={classes.ecoImage}>
            <MImage src="/home/ecosystem/1.png"></MImage>
          </Center>
          <Text color="white">THE GAME BET</Text>
        </Stack>
        <Stack align="center" spacing={40}>
          <Center className={classes.ecoImage}>
            <MImage src="/home/ecosystem/2.png"></MImage>
          </Center>
          <Text color="white">RANDOM GAME</Text>
        </Stack>
        <Stack align="center" spacing={40}>
          <Center className={classes.ecoImage}>
            <MImage src="/home/ecosystem/3.png"></MImage>
          </Center>
          <Text color="white">METAVERSE CLUB</Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

const Roadmap = () => {
  const { classes } = useSiteStyles();
  return (
    <Stack className={classes.roadWrap} align="center" spacing={0}>
      <Text color="white" align="center" className={classes.heroTitle}>
        RoadMap
      </Text>
      <Center className={classes.roadImg}>
        <MImage src="/home/roadmap/1.png"></MImage>
      </Center>
      <Center className={classes.roadBg}>
        <MImage src="/football.png"></MImage>
      </Center>
    </Stack>
  );
};

const Partners = () => {
  const { classes } = useSiteStyles();
  return (
    <Stack className={classes.partnerWrap} align="center" spacing={0}>
      <Text
        color="white"
        align="center"
        className={classes.heroTitle}
        sx={() => ({
          paddingBottom: "48px",
        })}
      >
        Partners
      </Text>
      <SimpleGrid cols={4} spacing={20}>
        <Center className={classes.partnerImg}>
          <MImage src="/home/partners/1.png"></MImage>
        </Center>
        <Center className={classes.partnerImg}>
          <MImage src="/home/partners/2.png"></MImage>
        </Center>
      </SimpleGrid>
    </Stack>
  );
};

const getGameId = () => {
  const { data } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: "getGameIds",
  });
  if (data) {
    return Number(data.toString());
  }
};

const getArgs = (gameId) => {
  let contractArgs = [];
  while (gameId > 0) {
    contractArgs.push({
      addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractInterface: abi,
      functionName: "getGameInfo",
      args: gameId,
    });
    gameId--;
  }
  return contractArgs;
};

const HomePage: NextPage<{
  info: Tweet[];
  avatars: Array<{ avatar: string }>;
  count: number;
}> = ({ info, avatars, count }) => {
  const gameId = getGameId();
  const [gameArgs, setGameArgs] = useState([]);
  const [gameInfo, setGameInfo] = useState([]);

  useEffect(() => {
    setGameArgs(getArgs(gameId));
  }, []);

  useContractReads({
    contracts: gameArgs,
    enabled: gameArgs.length > 0 ? true : false,
    onSuccess: (data) => {
      const newData = data.map((item) => {
        const newItem = item.map(i => {
          if (ethers.BigNumber.isBigNumber(i)) {
            return i.toString();
          }
          return i
        })
        newItem[7] = gameId
        return newItem
      });
      const ingGame = newData.filter((i) => i[6] === "1");
      if (!ingGame.length) {
        setGameInfo(newData.filter((i) => i[6] === "2"));
      } else {
        setGameInfo(ingGame);
      }
    },
  });

  return (
    <div className="container">
      <Banner />
      <FIFA info={gameInfo} />
      <Info />
      <Ecosystem />
      <Roadmap />
      <Partners />
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

export default HomePage;
