import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => {
  return {
    marquee: {
      background: "#7923db",
      width: "100vw",
      boxSizing: "border-box",
      padding: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    marqueeContent: {
      display: "flex",
      animation: "marquee 20s linear infinite running",
    },
    marqueeTag: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .2s ease",
    },
  };
});
