import {
  Stack,
  Text,
  Tabs,
  Center,
  Image as MImage,
  Table,
  Card,
  Pagination,
  Group,
  UnstyledButton,
} from "@mantine/core";
import Image from "next/image";
import { NextPage } from "next";
import { Tweet } from "src/types";
import StyledTabs from "./StyledTabs";
import TotalAwardPool from "./TotalAwardPool";
import { useBetStyles } from "src/theme";
import Link from "next/link";
import GoBack from "./GoBack";

const betList = [
  {
    id: 1,
    name: "FIFA WORLD CUP GROUP B",
    time: "25 Mar,2022",
    left: "JP",
    right: "JP",
  },
  {
    id: 2,
    name: "FIFA WORLD CUP GROUP B",
    time: "25 Mar,2022",
    left: "JP",
    right: "JP",
  },
];

const Banner = () => {
  const { classes } = useBetStyles();
  return (
    <Stack align="" className={classes.bannerWrap} spacing={48}>
      <Center className={classes.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <GoBack />
      <TotalAwardPool title="THE TOTAL REWAED POOL" value="$ 1,000,356,586,069" />
      <Stack align="center" spacing={25}>
        {betList.map((item, index) => {
          return (
            <Group
              key={`item_${index}`}
              position="center"
              grow
              sx={() => ({
                backgroundColor: "#162d67",
                padding: "18px 2.6%",
                width: "70vw",
                boxSizing: "border-box",
              })}
            >
              <Stack spacing={12}>
                <Text color="#fff" size="1rem">
                  {item.name}
                </Text>
                <Group spacing={5}>
                  <Image
                    src="/bet/list/icon-clock.png"
                    width={20}
                    height={20}
                  ></Image>
                  <Text color="#c6c2d1">{item.time}</Text>
                </Group>
              </Stack>
              <Group
                position="center"
                spacing={22}
                sx={(theme) => ({
                  position: "relative",
                  padding: "0 4%",
                  "&::before, &::after": {
                    top: 0,
                    content: '""',
                    position: "absolute",
                    height: "100%",
                    width: "1px",
                    backgroundColor: "#304e9e",
                  },
                  "&::before": {
                    left: 0,
                  },
                  "&::after": {
                    right: 0,
                  },
                })}
              >
                <Image src="/flag/flag.png" width={45} height={45}></Image>
                <Text color="#45a9f1" size="1.2rem">
                  VS
                </Text>
                <Image src="/flag/flag.png" width={45} height={45}></Image>
              </Group>
              <Group position="right">
                <Link href={`/bet/${item.id}`}>
                  <UnstyledButton>
                    <Image
                      src="/bet/list/button.png"
                      width={85}
                      height={32}
                    ></Image>
                  </UnstyledButton>
                </Link>
              </Group>
            </Group>
          );
        })}
      </Stack>
    </Stack>
  );
};

const Log = () => {
  const { classes } = useBetStyles();
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon", visible: true },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen", visible: true },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium", visible: true },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium", visible: true },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium", visible: true },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: "Cerium",
      visible: false,
    },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: "Cerium",
      visible: false,
    },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: "Cerium",
      visible: false,
    },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: "Cerium",
      visible: false,
    },
    {
      position: 58,
      mass: 140.12,
      symbol: "Ce",
      name: "Cerium",
      visible: false,
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td style={{ opacity: element.visible ? 1 : 0 }}>{element.position}</td>
      <td style={{ opacity: element.visible ? 1 : 0 }}>{element.name}</td>
      <td style={{ opacity: element.visible ? 1 : 0 }}>{element.symbol}</td>
      <td style={{ opacity: element.visible ? 1 : 0 }}>{element.mass}</td>
    </tr>
  ));
  return (
    <Stack align="center" className={classes.logWrap}>
      <Center className={classes.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <Stack className={classes.logContent} spacing={48}>
        <StyledTabs defaultValue="total">
          <Tabs.List>
            <Tabs.Tab value="total">Total Bets</Tabs.Tab>
            <Tabs.Tab value="my">My Bets</Tabs.Tab>
          </Tabs.List>
        </StyledTabs>
      </Stack>
      <Stack align="center" className={classes.tableWrap}>
        <Card className={classes.tableBox}>
          <Table horizontalSpacing="md" verticalSpacing="lg">
            <thead>
              <tr>
                <th>item</th>
                <th>match info</th>
                <th>game result</th>
                <th>total reward</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Center className={classes.pageWrap}>
            <Pagination
              position="center"
              size="sm"
              radius="xl"
              sx={() => ({
                gap: "10px",
              })}
              styles={(theme) => ({
                item: {
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  color: "white",
                  border: "none",
                  backgroundColor: "#9437c6",
                  "&[data-active]": {
                    backgroundColor: "#0ddbeb",
                  },
                },
              })}
              total={17}
              withControls={false}
            />
          </Center>
        </Card>
        <Center className={classes.footBall}>
          <MImage src="/football.png"></MImage>
        </Center>
      </Stack>
    </Stack>
  );
};

const BetListPage: NextPage<{
  tweets: Tweet[];
  avatars: Array<{ avatar: string }>;
  count: number;
}> = ({ tweets, avatars, count }) => {
  return (
    <div className="container">
      <Banner />
      <Log />
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

export default BetListPage;
