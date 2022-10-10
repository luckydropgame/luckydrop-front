import Image from "next/image";
import {Stack, Text} from "@mantine/core";
import {useSiteStyles} from "../theme";
export default function AwardsPage(props) {
  const { classes } = useSiteStyles()
  return (
    <Stack
      sx={theme => ({
        padding: '0 80px',
        paddingTop: '87px',
        paddingBottom: '237px',
        [theme.fn.smallerThan('md')]: {
          padding: '0 1rem',
          paddingTop: '87px',
          paddingBottom: '87px',
        },
      })}
    >
      <Text
        weight={700}
        color="white"
        sx={theme => ({
          fontSize: '2.25rem',
          marginTop: '64px',
          [theme.fn.smallerThan('md')]: {
            margin: '20px 0',
            fontSize: '1.6rem',
          },
        })}
      >
        Awards
      </Text>
      <Stack
        align="center"
        sx={theme => ({
          padding: '60px 0',
          width: '100%',
          [theme.fn.smallerThan('lg')]: {
            padding: '30px',
          },
        })}
      >
        <Image src="/prize.png" height={80} width={80} layout="fixed" />
        <Stack align="center">
          <Text color="white" className={classes.heroTitle}>1 x 1st Prize = 5 ETH</Text>
          <Text color="white" className={classes.heroTitle}>2 x 2nd Prize = 1.5 ETH Each</Text>
          <Text color="white" className={classes.heroTitle}>20 x 3rd Prize = 0.1 Eth Each</Text>
        </Stack>
        <Text
          size="lg"
          sx={theme => ({
            [theme.fn.smallerThan('md')]: { fontSize: '1.125rem' },
            fontWeight: 600,
            fontSize: '32px',
            color: 'white',
          })}
        >
          Contest results to be announced around the time of the Ethereum Merge
        </Text>
      </Stack>
    </Stack>
  )
}
