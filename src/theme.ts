import { MantineThemeOverride, createStyles } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    site: ["#EAF557"],
    bg: ["#280f4c", "#260b44"],
    fontColor: "#fff",
  },
  fontFamily: "inherit",
};

export const useSiteStyles = createStyles((theme) => {
  return {
    basicBg: {
      position: "absolute",
      width: "25vw",
      left: "4vw",
      top: "20px",
    },
    heroTitle: {
      fontSize: "1.875rem",
      lineHeight: "1",
      marginBottom: "44px",
      fontFamily: theme.fontFamily,
      [theme.fn.smallerThan("md")]: {
        fontSize: "1.25rem",
      },
    },
    bannerWrap: {
      width: "100%",
      minHeight: "780px",
      background: "url('/home/banner/bg.png') no-repeat",
      backgroundSize: "cover",
      position: "relative",
      backgroundColor: theme.colors.bg[0],
      fontFamily: theme.fontFamily,
      [theme.fn.smallerThan("lg")]: {},
    },
    bannerTitle: {
      width: "50%",
      position: "absolute",
      left: "14%",
      top: "140px",
    },
    bannerButtonGroup: {
      position: "absolute",
      left: "25%",
      top: "340px",
    },
    bannerButton: {
      width: "262px",
      height: "167px",
      background: "url('/home/banner/button.png') no-repeat",
      backgroundSize: "cover",
      "&:hover": {
        background: "url('/home/banner/button-hover.png') no-repeat",
        backgroundSize: "cover",
      },
    },
    bannerTextButton: {
      position: "absolute",
      bottom: "20px",
      zIndex: 2,
      left: "50%",
      transform: "translateX(-55%)",
    },
    bannerImg: {
      width: "56px",
      margin: "auto",
      flex: 1,
      [theme.fn.smallerThan("md")]: {
        width: "56px",
      },
    },
    bannerTip: {
      textAlign: "center",
      lineHeight: 1.5,
      color: "#fff",
      [theme.fn.largerThan("md")]: {
        fontSize: "0.75rem",
      },
    },
    fifaWrap: {
      backgroundColor: theme.colors.bg[1],
      padding: "25px 0",
      position: "relative",
      overflow: "hidden",
      fontFamily: theme.fontFamily,
      [theme.fn.largerThan("md")]: {
        padding: "25px 0",
      },
    },
    fifaItem: {
      backgroundColor: "#36105f",
      borderRadius: "12px",
      border: "1px solid #0ddded",
      boxShadow: "0px 0px 8px #0ddded",
    },
    fifaFlag: {
      width: "48px",
      height: "33px",
    },
    fifaJoin: {
      width: "91px",
      height: "41px",
      background: "url('/home/fifa/button.png') no-repeat",
      backgroundSize: "cover",
      "&:hover": {
        background: "url('/home/fifa/button-hover.png') no-repeat",
        backgroundSize: "cover",
      },
    },
    infoWrap: {
      backgroundColor: theme.colors.bg[0],
      color: "#fff",
      textAlign: "center",
      paddingTop: "84px",
    },
    infoItemIcon: {
      width: "102px",
      height: "102px",
    },
    infoItemArrowRight: {
      width: "22px",
      height: "37px",
      position: "relative",
      top: "-20px",
    },
    infoItemText: {
      fontSize: "12px",
    },
    infoFoot: {
      width: "100%",
      background: "url('/home/info/bg.png') no-repeat",
      backgroundSize: "cover",
      padding: "40px 180px",
    },
    infoFootTitle: {
      width: "260px",
    },
    infoFootButton: {
      width: "156px",
      height: "58px",
      background: "url('/home/info/button.png') no-repeat",
      backgroundSize: "cover",
      "&:hover": {
        background: "url('/home/info/button-hover.png') no-repeat",
        backgroundSize: "cover",
      },
    },
    ecoWrap: {
      backgroundColor: theme.colors.bg[0],
      paddingTop: "82px",
      paddingBottom: "68px",
    },
    ecoImage: {
      width: "195px",
      height: "132px",
      borderRadius: "8px",
      backgroundColor: "#36105f",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid #0ddded",
        boxShadow: "0px 0px 12px #0ddded",
      },
    },
    roadWrap: {
      backgroundColor: theme.colors.bg[1],
      paddingTop: "82px",
      paddingBottom: "250px",
      position: "relative",
    },
    roadImg: {
      width: "72%",
      marginTop: "130px",
    },
    roadBg: {
      position: "absolute",
      width: "274px",
      left: 0,
      bottom: "-116px",
    },
    partnerWrap: {
      backgroundColor: theme.colors.bg[0],
      paddingTop: "60px",
      paddingBottom: "84px",
    },
    partnerImg: {
      width: "240px",
      cursor: "pointer",
      borderRadius: "10px",
      overflow: "hidden",
      "&:hover": {
        border: "1px solid #0ddded",
        boxShadow: "0px 0px 12px #0ddded",
      },
    },
    scrollBar: {
      width: "100%",
      backgroundColor: "#7923db",
    },
  };
});

export const useBetStyles = createStyles(() => {
  return {
    basicBg: {
      position: "absolute",
      width: "30vw",
      left: "4vw",
      top: "86px",
    },
    bannerWrap: {
      paddingTop: "20px",
      paddingBottom: "70px",
      position: "relative",
      zIndex: 2,
    },
    betImg: {
      cursor: "pointer",
      transform: "scale(1)",
      transition: "transform 0.1s linear 0s",
      "&:hover": {
        transform: "scale(1.04)",
        transition: "transform 0.1s linear 0s",
      },
    },
    logWrap: {
      paddingTop: "52px",
      position: "relative",
      backgroundColor: theme.colors.bg[1],
    },
    logContent: {
      width: "74vw",
    },
    tableWrap: {
      width: "100%",
      position: "relative",
    },
    tableBox: {
      width: "74vw",
      backgroundColor: "rgba(54, 16, 95, 0.5)",
      borderRadius: "5px",
      border: "1px solid #0ddded",
      boxShadow: "0 0 10px #0ddded",
      margin: "25px 0 5px",
    },
    footBall: {
      width: "28.3vw",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    pageWrap: {
      padding: "25px 0",
    },
  };
});

export const useGameStyles = createStyles(() => {
  return {
    basicBg: {
      position: "absolute",
      width: "25vw",
      left: "4vw",
      top: "20px",
    },
    bannerWrap: {
      paddingTop: "92px",
      paddingBottom: "70px",
      position: "relative",
      zIndex: 2,
    },
    gameImg: {
      width: "150px",
      height: "150px",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "3px 2px 3px 0px rgba(242, 128, 6, 0.71)",
      },
    },
    logWrap: {
      paddingTop: "52px",
      position: "relative",
      backgroundColor: theme.colors.bg[1],
    },
    logContent: {
      width: "74vw",
    },
    tableWrap: {
      width: "100%",
      position: "relative",
    },
    tableBox: {
      width: "74vw",
      backgroundColor: "rgba(54, 16, 95, 0.5)",
      borderRadius: "5px",
      border: "1px solid #0ddded",
      boxShadow: "0 0 10px #0ddded",
      margin: "25px 0 5px",
    },
    footBall: {
      width: "28.3vw",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    pageWrap: {
      padding: "25px 0",
    },
  };
});

export const useUncomingStyles = createStyles(() => {
  return {
    basicBg: {
      position: "absolute",
      width: "25vw",
      left: "4vw",
      top: "20px",
    },
    bannerWrap: {
      paddingTop: "92px",
      position: "relative",
      zIndex: 2,
    },
    logWrap: {
      paddingTop: "52px",
      position: "relative",
      top: "-60px",
      backgroundColor: theme.colors.bg[1],
    },
    logContent: {
      width: "74vw",
    },
    tableWrap: {
      width: "100%",
      position: "relative",
    },
    tableBox: {
      width: "74vw",
      backgroundColor: "rgba(54, 16, 95, 0.5)",
      borderRadius: "5px",
      border: "1px solid #0ddded",
      boxShadow: "0 0 10px #0ddded",
      margin: "25px 0 5px",
    },
    footBall: {
      width: "28.3vw",
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    pageWrap: {
      padding: "25px 0",
    },
  };
});

export const useDetailStyles = createStyles(() => {
  return {
    bannerWrap: {
      paddingTop: "20px",
      position: "relative",
      zIndex: 2,
      paddingBottom: "30px",
      color: "#f7fafb",
    },
    betDetailWrap: {
      width: "80vw",
      backgroundColor: "#1f1e59",
      borderRadius: "5px",
      padding: "30px",
    },
    chooseButton: {
      width: "174px",
      height: "50px",
      background: "#6223a6",
      borderRadius: "2px",
      "&:hover": {
        background:
          "-webkit-gradient(linear,0% 4%, 0% 100%, from(#EA861A), to(#F53B19))",
      },
    },
    mainButton: {
      width: "200px",
      height: "54px",
      borderRadius: '54px',
      background:
        "-webkit-gradient(linear,0% 4%, 0% 100%, from(#EA861A), to(#F53B19))",
      "&:hover, &:active": {
        background:
          "-webkit-gradient(linear,0% 0%, 0% 50%, from(#EC7E16), to(#F53A19))",
          boxShadow: '0px 0px 10px #ED7B17'
      },
    },
  };
});

export const useClaimStyles = createStyles(() => {
  return {
    bannerWrap: {
      padding: '90px 0'
    }
  }
})

export default theme;
