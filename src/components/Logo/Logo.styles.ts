import { createStyles } from '@mantine/core'

export default createStyles(theme => ({
  logo: {
    // ...theme.fn.focusStyles(),
    width: '126px',
    height: '20px',
    position: 'relative',
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}))
