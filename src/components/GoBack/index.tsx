
import { useRouter } from "next/router";
import { Image, Stack, UnstyledButton } from "@mantine/core";

const GoBack = () => {
  const router = useRouter();
  return (
    <Stack
      align="left"
      sx={(theme) => ({
        width: "100%",
        padding: "0 80px",
        [theme.fn.smallerThan("md")]: {
          padding: "0 1rem",
        },
      })}
    >
      <UnstyledButton onClick={() => router.back()}>
        <Image width={45} height={33} src="/back.png"></Image>
      </UnstyledButton>
    </Stack>
  );
};
export default GoBack;
