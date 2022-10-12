import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Grid,
  Group,
  Image as MImage,
  Modal,
  Stack,
  Text,
  UnstyledButton,
  NumberInput,
  MantineProvider,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import GoBack from "./GoBack";
import TotalAwardPool from "./TotalAwardPool";
import { MEDIA_TYPE } from "../common/constants";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useMediaQuery } from "@mantine/hooks";
import { Variant } from "../types";
import { useDetailStyles, useSiteStyles } from "../theme";

const Banner = () => {
  const { classes } = useDetailStyles();
  const basicClass = useSiteStyles().classes;
  return (
    <Stack align="center" className={classes.bannerWrap} spacing={20}>
      <Center className={basicClass.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <GoBack />
      <TotalAwardPool title="THE TOTAL REWAED POOL" value="$ 1,000,356,586,069" />
      <Stack align="center" className={classes.betDetailWrap} spacing={40}>
        <Text size="1.25rem">CURRENT REWARD POOL</Text>
        <Text size="1.6rem" color="#fba33c">
          1,8878,394,030 USDT
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
            <Image width="210" height="140" src="/flag/flag-2.png" />
            <Text>JAPAN</Text>
          </Stack>
          <Text
            size={30}
            color="#46a9f1"
            style={{ position: "relative", top: "-30px" }}
          >
            VS
          </Text>
          <Stack align="center">
            <Image width="210" height="140" src="/flag/flag-2.png" />
            <Text>JAPAN</Text>
          </Stack>
        </Group>
        <Group spacing={66}>
          <Stack align="center" spacing={14}>
            <Text size={14}>WIN</Text>
            <UnstyledButton className={classes.chooseButton}>
              <Text size={16} color="#fcfaf7" align="center">
                2.3
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              1000,234,485 USDT betted
            </Text>
          </Stack>
          <Stack align="center" spacing={14}>
            <Text size={14}>DRAW</Text>
            <UnstyledButton className={classes.chooseButton}>
              <Text size={16} color="#fcfaf7" align="center">
                2.3
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              1000,234,485 USDT betted
            </Text>
          </Stack>
          <Stack align="center" spacing={14}>
            <Text size={14}>WIN</Text>
            <UnstyledButton className={classes.chooseButton}>
              <Text size={16} color="#fcfaf7" align="center">
                2.3
              </Text>
            </UnstyledButton>
            <Text size={12} color="#fba33c">
              1000,234,485 USDT betted
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
                  defaultValue={18}
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
                />
              </MantineProvider>

              <UnstyledButton
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
          <Center pt={16}>
            <UnstyledButton className={classes.mainButton}>
              <Text color="#fefefd" align="center">CONNECT WALLET</Text>
            </UnstyledButton>
          </Center>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Detail: NextPage<{ detail: any }> = ({ detail }) => {
  const router = useRouter();
  const [preview, setPreview] = useState(false);
  const isPC = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (!detail) {
      router.push("/404");
    }
  }, []);

  if (!detail) return null;

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

export default Detail;
