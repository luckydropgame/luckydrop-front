import { useState } from "react";
import {
  Center,
  Image as MImage,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import TotalAwardPool from "./TotalAwardPool";
import { useMediaQuery } from "@mantine/hooks";
import { useClaimStyles, useSiteStyles } from "../theme";

const Banner = () => {
  const { classes } = useClaimStyles();
  const basicClass = useSiteStyles().classes;
  return (
    <Stack align="center" className={classes.bannerWrap} spacing={54}>
      <Center className={basicClass.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>

      <TotalAwardPool
        title="MY INFORMATION"
        value="MY REWARDS: 453,345,000 USDT"
      />
      <Center>
        <UnstyledButton
          sx={() => ({
            width: "140px",
            height: "45px",
            borderRadius: "6px",
            background:
              "-webkit-gradient(linear,0% 4%, 0% 100%, from(#f69e3d), to(#f7710a))",
            "&:hover": {
              background:
                "-webkit-gradient(linear,0% 4%, 0% 100%, from(#f69e3d), to(#f7710a))",
              boxShadow:
                "0px 0px 5px rgba(255, 255, 255, 0.35) inset, 0px 0px 15px rgba(237, 139, 13, 0.35)",
            },
          })}
        >
          <Text align="center" color="#fff" size={20}>
            CLAIM
          </Text>
        </UnstyledButton>
      </Center>
    </Stack>
  );
};

const ClaimPage: NextPage<{ detail: any }> = ({ detail }) => {
  const router = useRouter();
  const [preview, setPreview] = useState(false);
  const isPC = useMediaQuery("(min-width: 992px)");

  return (
    <div className="container">
      <Banner />
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

export default ClaimPage;
