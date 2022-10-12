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
import { NextPage } from "next";
import { Tweet } from "src/types";
import TotalAwardPool from "./TotalAwardPool";
import StyledTabs from "../components/StyledTabs";
import { useUncomingStyles } from "src/theme";

const Banner = () => {
  const { classes } = useUncomingStyles();
  return (
    <Stack align="center" className={classes.bannerWrap} spacing={48}>
      <Center className={classes.basicBg}>
        <MImage src="/bg.png"></MImage>
      </Center>
      <TotalAwardPool title="THE TOTAL REWAED POOL" value="$ 1,000,356,586,069" />
      <Stack
        align="center"
        sx={() => ({
          width: "65vw",
        })}
      >
        <MImage src="/uncoming.png"></MImage>
      </Stack>
    </Stack>
  );
};

const Log = () => {
  const { classes } = useUncomingStyles();
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

const UncomingPage: NextPage<{
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

export default UncomingPage;
