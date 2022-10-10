import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import useStyles from './Logo.styles'

export function Logo() {
  const { classes } = useStyles()

  return (
    <Link href="/" className={classes.logo} aria-label="LuckyDrop">
      <Image src="/logo.png" width="142" height="22" />
    </Link>
  )
}
