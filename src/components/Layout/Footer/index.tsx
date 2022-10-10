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
            <MImage src="/twitter.png"></MImage>
          </Center>
          <Center className={classes.footerImg}>
            <MImage src="/discord.png"></MImage>
          </Center>
          <Center className={classes.footerImg}>
            <MImage src="/telegram.png"></MImage>
          </Center>
        </SimpleGrid>
      </Group>
    </Box>
  );
};

export default Footer;
