import { NextPageContext } from 'next'
import Uncoming from 'src/components/uncoming'
import { Tweet } from 'src/types'

export const getServerSideProps = async ({ res }: NextPageContext) => {
  let tweets: Tweet[] = []

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      tweets: tweets.filter(t => t.medias.length),
    },
  }
}

export default Uncoming
