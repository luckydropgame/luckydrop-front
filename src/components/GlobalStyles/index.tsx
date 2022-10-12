import { Global, MantineTheme } from "@mantine/core";
export function GlobalStyles() {
  return (
    <Global
      styles={(theme: MantineTheme) => [
        {
          "@font-face": {
            fontFamily: "sc-regular",
            src: `url('/SourceHanSansSC-Regular.otf') format("opentype")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          body: {
            backgroundColor:
              theme.colorScheme === "dark" ? "#280f4c" : theme.white,
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            lineHeight: theme.lineHeight,
            fontSize: theme.fontSizes.md,
            fontFamily: 'sc-regular',
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          p: {
            margin: "6px 0",
          },
        },
      ]}
    />
  );
}
