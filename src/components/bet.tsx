import {
  Stack,
  Text,
  Tabs,
  Center,
  Image as MImage,
  SimpleGrid,
  Table,
  Card,
  Pagination,
} from "@mantine/core";
import { NextPage } from "next";
import { Tweet } from "src/types";
import StyledTabs from "./StyledTabs";
import { useBetStyles } from "src/theme";

const Banner = () => {
  const { classes } = useBetStyles();
  return (
    <Stack align="center" className={classes.bannerWrap} spacing={48}>
      <Stack align="center" className={classes.valueWrap} spacing={36}>
        <Text color="white" className={classes.title}>
          THE TOTAL REWAED POOL
        </Text>
        <Text color="#fa8a04" className={classes.value}>
          $ 1,000,356,586,069
        </Text>
        <Center className={classes.line}>
          <MImage src="/line.png"></MImage>
        </Center>
      </Stack>
      <SimpleGrid
        sx={() => ({
          width: "57vw",
        })}
        cols={3}
        spacing={30}
      >
        <Center className={classes.betImg}>
          <MImage src="/bet/1.png"></MImage>
        </Center>
        <Center className={classes.betImg}>
          <MImage src="/bet/2.png"></MImage>
        </Center>
        <Center className={classes.betImg}>
          <MImage src="/bet/3.png"></MImage>
        </Center>
        <Center className={classes.betImg}>
          <MImage src="/bet/4.png"></MImage>
        </Center>
        <Center className={classes.betImg}>
          <MImage src="/bet/5.png"></MImage>
        </Center>
        <Center className={classes.betImg}>
          <MImage src="/bet/6.png"></MImage>
        </Center>
      </SimpleGrid>
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

const BetPage: NextPage<{
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

export default BetPage;
