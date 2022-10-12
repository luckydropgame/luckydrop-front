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
} from "@mantine/core";
import Link from "next/link";
import { NextPage } from "next";
import { Tweet } from "src/types";
import StyledTabs from "./StyledTabs";
import { useGameStyles } from "src/theme";
import TotalAwardPool from "./TotalAwardPool";

const Banner = () => {
  const { classes } = useGameStyles();
  return (
    <Stack align="center" className={classes.bannerWrap} spacing={48}>
      <Center className={classes.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <TotalAwardPool title="THE TOTAL REWAED POOL" value="$ 1,000,356,586,069" />
      <Stack
        align="center"
        spacing={25}
        sx={() => ({
          width: "70vw",
          borderRadius: "20px",
          background:
            "linear-gradient(42deg, rgba(94, 53, 143, 0.49), rgba(166, 38, 198, 0.49))",
          paddingTop: "36px",
          paddingBottom: "46px",
          color: "#fbfafc",
        })}
      >
        <Text size="30px">Welcome to LuckyDrop</Text>
        <Text size="1rem">Connent your wallet to get playling!</Text>
        <Group spacing={72}>
          <Stack align="center" spacing={26}>
            <Link href="/uncoming">
              <Center className={classes.gameImg}>
                <MImage src="/game/game1.png"></MImage>
              </Center>
            </Link>
            <Text size="1rem">Game</Text>
            <Text size="1.45rem">Roulette</Text>
          </Stack>
          <Stack align="center" spacing={26}>
            <Link href="/uncoming">
              <Center className={classes.gameImg}>
                <MImage src="/game/game2.png"></MImage>
              </Center>
              <Text size="1rem">Game</Text>
              <Text size="1.45rem">Dice</Text>
            </Link>
          </Stack>
          <Stack align="center" spacing={26}>
            <Link href="/uncoming">
              <Center className={classes.gameImg}>
                <MImage src="/game/game3.png"></MImage>
              </Center>
              <Text size="1rem">Game</Text>
              <Text size="1.45rem">Bankroll</Text>
            </Link>
          </Stack>
        </Group>
      </Stack>
    </Stack>
  );
};

const Log = () => {
  const { classes } = useGameStyles();
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

const GamePage: NextPage<{
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

export default GamePage;
