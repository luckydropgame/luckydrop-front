import {
  Box,
  Group,
  Text,
  Center,
  Image as MImage,
  SimpleGrid,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useStyles from "./index.styles";

const TwitterIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ width: "54px", fill: "#1F9CF0" }}
    >
      <g>
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
      </g>
    </svg>
  );
};

const DiscordIcon = () => {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true" width="54" height="54">
      <path
        d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z"
        fill="#738BD8"
      ></path>
      <path d="M190.915 234.305h642.169v477.288H190.915z" fill="#FFFFFF"></path>
      <path
        d="M698.157 932.274L157.288 862.85c-58.43-7.5-55.4-191.167-50.26-249.853l26.034-297.22c5.14-58.686 74.356-120.22 132.7-128.362l466.441-65.085c58.346-8.14 177.24 212.65 176.09 271.548l-8.677 445.108M512 300.373c-114.347 0-194.56 49.067-194.56 49.067 43.947-39.253 120.747-61.867 120.747-61.867l-7.254-7.253c-72.106 1.28-137.386 51.2-137.386 51.2-73.387 153.173-68.694 285.44-68.694 285.44 59.734 77.227 148.48 71.68 148.48 71.68l30.294-38.4c-53.334-11.52-87.04-58.88-87.04-58.88S396.8 645.973 512 645.973c115.2 0 195.413-54.613 195.413-54.613s-33.706 47.36-87.04 58.88l30.294 38.4s88.746 5.547 148.48-71.68c0 0 4.693-132.267-68.694-285.44 0 0-65.28-49.92-137.386-51.2l-7.254 7.253s76.8 22.614 120.747 61.867c0 0-80.213-49.067-194.56-49.067M423.68 462.08c27.733 0 50.347 24.32 49.92 54.187 0 29.44-22.187 54.186-49.92 54.186-27.307 0-49.493-24.746-49.493-54.186 0-29.867 21.76-54.187 49.493-54.187m177.92 0c27.733 0 49.92 24.32 49.92 54.187 0 29.44-22.187 54.186-49.92 54.186-27.307 0-49.493-24.746-49.493-54.186 0-29.867 21.76-54.187 49.493-54.187z"
        fill="#748bd9"
      ></path>
    </svg>
  );
};

const TelegramIcon = () => {
  return (
    <svg viewBox="0 0 1024 1024" aria-hidden="true" width="54" height="54">
      <path
        d="M679.424 746.862l84.005-395.996c7.424-34.852-12.581-48.567-35.438-40.009L234.277 501.138c-33.72 13.13-33.134 32-5.706 40.558l126.282 39.424 293.156-184.576c13.714-9.143 26.295-3.986 16.018 5.157L426.898 615.973l-9.143 130.304c13.13 0 18.871-5.706 25.71-12.581l61.696-59.429 128 94.282c23.442 13.129 40.01 6.29 46.3-21.724zM1024 512c0 282.843-229.157 512-512 512S0 794.843 0 512 229.157 0 512 0s512 229.157 512 512z"
        fill="#1397dc"
      ></path>
    </svg>
  );
};

const Footer = () => {
  const { classes } = useStyles();
  const isPC = useMediaQuery("(min-width: 992px)");
  return (
    <Box style={{ backgroundColor: "#260b44" }}>
      <Group
        spacing={34}
        sx={(theme) => ({
          padding: "6rem 0rem",
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "65vw",
          margin: "0 auto",
          [theme.fn.smallerThan("md")]: {
            padding: "3rem 2rem",
            width: "100%",
          },
        })}
      >
        <Text
          sx={(theme) => ({
            fontSize: "1.875rem",
            lineHeight: "1",
            [theme.fn.smallerThan("md")]: {
              fontSize: "1.25rem",
            },
          })}
          color="white"
          align="center"
        >
          Contact Us
        </Text>
        <Center
          sx={(theme) => ({
            width: "194px",
          })}
        >
          <MImage src="/foot.png"></MImage>
        </Center>
        <Text
          sx={(theme) => ({
            fontSize: "1rem",
          })}
          align="center"
          color="white"
        >
          Please feel free to contact us through our support center. Simply
          choose the
          <br />
          appropriate support options to send us your questions, concerns and/or
          feedback.
          <br />
          Our customer service team is ready to overcome any issues that might
          occur.
        </Text>
        <SimpleGrid cols={3} spacing={84}>
          <Center className={classes.footerImg}>
            <TwitterIcon></TwitterIcon>
          </Center>
          <Center className={classes.footerImg}>
            <DiscordIcon></DiscordIcon>
          </Center>
          <Center className={classes.footerImg}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
            >
              <TelegramIcon></TelegramIcon>
            </div>
          </Center>
        </SimpleGrid>
      </Group>
    </Box>
  );
};

export default Footer;
