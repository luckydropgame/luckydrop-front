import Image from "next/image";
import {Stack, Text, Group} from "@mantine/core";
import {useSiteStyles} from "../theme";
export default function AboutPage(props) {
  const { classes } = useSiteStyles()
  return (
    <Stack
      sx={theme => ({
        padding: '0 80px',
        paddingTop: '64px',
        [theme.fn.smallerThan('md')]: {
          padding: '0 1rem',
          paddingTop: '87px',
          paddingBottom: '87px',
        },
      })}
    >
      <Stack
        align="center"
        sx={theme => ({
          paddingTop: '64px',
        })}
      >
        <Text color="white" className={classes.heroTitle}>
          About<span className={classes.highlight}>{' '}#ETHMergeArt</span>
        </Text>
      </Stack>
      <Stack
        align="center"
        sx={theme => ({
          paddingTop: '44px',
        })}
      >
        <Text
          size="lg"
          sx={theme => ({
            width: '628px',
            marginBottom: '44px',
            [theme.fn.smallerThan('md')]: {
              fontSize: '1.125rem',
              width: '300px'
            },
            color: 'white',
          })}
        >
          <p>
            <span className={classes.highlight}>#ETHMergeArt{' '}</span>
            movement is about celebrating the coming of Ethereum Merge around the world, by inviting global artists to create something special for the event, #ETHMergeArt will mark this moment forever on ETHMerge.art.
          </p>
          <p>
            The movement is powered by CreatorDAO and sponsors.
          </p>
          <p>
            Specially designed OATs are distributed to artists, twitter participants and #ETHMergeArt fam members.
          </p>
        </Text>
        <Group sx={theme => ({
          gap: '50px',
          [theme.fn.smallerThan('md')]: {
            display: 'none',
          },
        })}>
          <Image src="/aboutimg1.png" height={250} width={250} layout="fixed" />
          <Image src="/aboutimg2.png" height={250} width={250} layout="fixed" />
        </Group>
        <Stack sx={theme => ({
          display: 'none',
          [theme.fn.smallerThan('md')]: {
            display: 'flex',
            gap: '50px',
          },
        })}>
          <Image src="/aboutimg1.png" height={250} width={250} layout="fixed" />
          <Image src="/aboutimg2.png" height={250} width={250} layout="fixed" />
        </Stack>
        <Stack
          sx={theme => ({
            marginTop: '15px',
          })}
        >
          <Image src="/aboutCD.png" height={43} width={352} layout="fixed" />
        </Stack>
        <Text
          size="lg"
          sx={theme => ({
            width: '628px',
            marginTop: '15px',
            marginBottom: '160px',
            color: 'white',
            [theme.fn.smallerThan('md')]: {
              fontSize: '1.125rem',
              width: '300px'
            },
          })}
        >
          <p>
            CreatorDAO is a decentralized commission platform born for Metaverse creativities. CreatorDAO is built by Web3 creators to serve all creators. Visit
            <a href="https://www.creatordao.cc/" style={{ color: '#EAF557' }} target="_blank">{` creatordao.cc `}</a>
            to find out more.
          </p>
        </Text>
      </Stack>
    </Stack>
  )
}
