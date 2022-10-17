import Head from "next/head";
import theme from "src/theme";
import { AppProps } from "next/app";
import abi from "src/abi/abi.json";
import React, { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import { chains, wagmiClient } from "src/connectors";
import { WagmiConfig, useContractRead, useContract } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import { formatNumber } from "../common/utils";

import "@rainbow-me/rainbowkit/styles.css";
import { GlobalStyles } from "src/components/GlobalStyles";
import "../style.css";

React.useLayoutEffect = useEffect;

function AppContent(props: AppProps) {
  const { Component, pageProps } = props;
  const [totalAward, setTotalAward] = useState("0");

  const { data } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractInterface: abi,
    functionName: "getGameInfo",
    args: "1",
  });

  useEffect(() => {
    if (data) {
      setTotalAward(
        formatNumber(
          data[0].add(data[1]).add(data[2]).toString() / Math.pow(10, 18)
        )
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>LuckyDrop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <RainbowKitProvider
        modalSize="compact"
        chains={chains}
        initialChain={97}
        theme={darkTheme({
          borderRadius: "small",
          accentColor: "#471480",
          accentColorForeground: "white",
          fontStack: "system",
        })}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={theme}
          abi={abi}
        >
          <GlobalStyles />
          <Header navbarOpened={false} toggleNavbar={console.log} />
          <Component {...pageProps} totalAward={totalAward} />
          <Footer />
        </MantineProvider>
      </RainbowKitProvider>
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <AppContent {...props} />
    </WagmiConfig>
  );
}
