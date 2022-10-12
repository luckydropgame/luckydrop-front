import { Stack, Text, Center, Image as MImage } from "@mantine/core";
import { useStyles } from "./index.styles";
const TotalAwardPool = ({ title = "", value = "" }) => {
  const { classes } = useStyles();
  return (
    <Stack align="center">
      <Stack align="center" className={classes.content} spacing={36}>
        <Text color="white" className={classes.title}>
          {title}
        </Text>
        <Text color="#fa8a04" className={classes.value}>
          {value}
        </Text>
        <Center className={classes.line}>
          <MImage src="/line.png"></MImage>
        </Center>
      </Stack>
    </Stack>
  );
};
export default TotalAwardPool;
