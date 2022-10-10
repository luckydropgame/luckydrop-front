import { createStyles } from '@mantine/core'

export const HEADER_HEIGHT = 60

export default createStyles(theme => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    zIndex: 6,
    position: 'fixed',
    backgroundColor: '#21093b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 80px',

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  logo: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    paddingTop: 6,
    display: 'flex',
    alignItems: 'center',
  },

  mainSection: {
    display: 'flex',
    alignItems: 'center',
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'all',
  },

  menus: {
    color: '#fff',
  },

  menuItem: {
    color: '#fff',
    padding: '0 34px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    // '&:hover': {
    //   color: '#EAF557',
    // },
  },

  controls: {
    display: 'flex',
  },
}))
