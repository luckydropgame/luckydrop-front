import { Burger, Drawer, Group, Divider, UnstyledButton } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons'
import { Logo } from '../../Logo/Logo'
import useStyles from './HeaderMobile.styles'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  navbarOpened: boolean
  toggleNavbar(): void
}

export function HeaderMobile({ navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles()
  const [drawerStatus, setDrawerStatus] = useState(false)
  const drawerListEnum = {
    HOME: '/',
    BET: 'bet',
    Awards: 'awards',
    About: 'about',
  }
  const generateDrawerListItem = () => {
    return (
      <div className={classes.drawerList}>
        {Object.keys(drawerListEnum).map((listKey: string) => (
          <div key={listKey}>
            <Link href={`/${drawerListEnum[listKey]}`}>
              <div
                className={classes.drawerListItem}
                onClick={() => setDrawerStatus(false)}
              >
                <UnstyledButton>
                  <span className={classes.drawerListItemText}>{listKey}</span>
                </UnstyledButton>
                <IconArrowRight color="white" size={24} />
              </div>
            </Link>
            <Divider />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <Group spacing="lg">
          <Burger
            opened={navbarOpened}
            size="sm"
            onClick={() => {
              toggleNavbar()
              setDrawerStatus(true)
            }}
            aria-label="Toggle navbar"
          />
        </Group>
      </div>
      <Drawer
        opened={drawerStatus}
        onClose={() => {
          setDrawerStatus(false)
        }}
        title={<Logo />}
        padding="xl"
        size="lg"
        position="right"
        styles={{ drawer: { backgroundColor: '#23203D' } }}
      >
        {generateDrawerListItem()}
      </Drawer>
    </div>
  )
}
