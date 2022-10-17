/* eslint-disable import/no-relative-packages */
import React from "react";
import Link from "next/link";
import { Logo } from "../../Logo/Logo";
import useStyles from "./HeaderDesktop.styles";
import { Group, UnstyledButton } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function HeaderDesktop() {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>
        </div>
      </div>

      <Group spacing="xl">
        <Link href="/">
          <UnstyledButton className={classes.menuItem}>HOME</UnstyledButton>
        </Link>
        <Link href="/bet">
          <UnstyledButton className={classes.menuItem}>BET</UnstyledButton>
        </Link>
        <Link href="/game">
          <UnstyledButton className={classes.menuItem}>GAME</UnstyledButton>
        </Link>
        <Link href="/claim">
          <UnstyledButton className={classes.menuItem}>CLAIM</UnstyledButton>
        </Link>
        <Link href="/">
          <UnstyledButton className={classes.menuItem}>
            WHITEPAPER
          </UnstyledButton>
        </Link>
      </Group>

      <Group spacing="lg">
        <ConnectButton accountStatus="address" chainStatus="icon" showBalance={false}></ConnectButton>
      </Group>
    </div>
  );
}
