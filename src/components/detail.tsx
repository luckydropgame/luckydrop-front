import { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Center,
  Grid,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { Button } from '@mantine/core'
import { MEDIA_TYPE } from '../common/constants'
import { IconArrowLeft } from '@tabler/icons'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import {Variant} from "../types";

const TwitterIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ width: '24px', fill: 'white' }}
    >
      <g>
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
      </g>
    </svg>
  )
}

const Detail: NextPage<{ art: any }> = ({ art }) => {
  const router = useRouter()
  const [preview, setPreview] = useState(false)
  const isPC = useMediaQuery('(min-width: 992px)')

  useEffect(() => {
    if (!art) {
      router.push('/404')
    }
  }, [])

  if (!art) return null

  const art_media = art.medias?.[0] || {}
  const art_type = art_media?.type
  let artUrl = art_media[MEDIA_TYPE[art_type]]
  const variants = art_media?.variants || []
  const isVideo = variants && variants.length > 0
  if (isVideo) {
    let bit_rate = 0
    let videoSrc = ''
    variants.filter((variant: Variant) => variant.content_type === 'video/mp4').forEach((variants: Variant) => {
      if (variants.bit_rate >= bit_rate) {
        bit_rate = variants.bit_rate
        videoSrc = variants.url
      }
    })
    artUrl = videoSrc
  }
  const renderMedia = () => {
    const pcVideo = <video
      controls
      loop
      poster={art_media.preview_image_url}
      style={{
        width: '867px',
        height: '568px',
      }}
      src={artUrl}
    />
    const mobileVideo = <video
      controls
      loop
      poster={art_media.preview_image_url}
      style={{
        width: '100%',
        height: '100%',
      }}
      src={artUrl}
    />
    const pcImage = <Image
      src={artUrl}
      height={568}
      width={867}
      onClick={() => setPreview(true)}
    />
    const mobileImage = <Image
      src={artUrl}
      onClick={() => setPreview(true)}
    />
    const pcMedia = isVideo ? pcVideo : pcImage
    const mobileMedia = isVideo ? mobileVideo : mobileImage
    return isPC ? pcMedia : mobileMedia
  }
  return (
    <Box style={{ padding: '100px 0' }}>
      <Stack
        sx={theme => ({
          padding: '0 80px',
          [theme.fn.smallerThan('md')]: {
            padding: '0 1rem',
          },
        })}
      >
        <UnstyledButton>
          <Group>
            <IconArrowLeft
              size={32}
              color="white"
              onClick={() => router.push('/gallery')}
            />
            <Text color="white" size="xl" weight="bold">
              Back To Gallery
            </Text>
          </Group>
        </UnstyledButton>
        <Grid grow columns={isPC ? 3 : 2}>
          <Grid.Col span={isPC ? 2 : 1} order={isPC ? 1 : 2}>
            <Center>
              {renderMedia()}
            </Center>
          </Grid.Col>
          <Grid.Col span={1} order={isPC ? 2 : 1}>
            <div className="art-information">
              <Group>
                <Avatar src={art.avatar} radius="xl" size="lg" />
                <Text color="white" weight="bold" size="xl">
                  @ {art.username}
                </Text>
              </Group>
              <Box style={{ marginTop: '1em' }}>
                <Text color="white" weight="400">
                  {art.text}
                </Text>
              </Box>
              <Link
                href={`https://twitter.com/intent/user?screen_name=${art.user_id}`}
              >
                <Button
                  className="follow-button"
                  leftIcon={<TwitterIcon />}
                  style={{
                    borderRadius: '100px',
                    height: '48px',
                    width: '242px',
                    marginTop: '30px',
                  }}
                >
                  <span className="follow-button-text">
                    Follow me on Twitter
                  </span>
                </Button>
              </Link>
            </div>
          </Grid.Col>
        </Grid>
        <Modal
          opened={preview}
          onClose={() => setPreview(false)}
          withCloseButton={false}
          overlayBlur={3}
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease"
        >
          <Image radius="md" src={artUrl} alt="artwork" />
        </Modal>
      </Stack>
    </Box>
  )
}

export default Detail
