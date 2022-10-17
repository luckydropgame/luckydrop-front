import { Tweet } from 'src/types'
import Bet from 'src/components/bet'
import { NextPageContext } from 'next'

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

export default Bet
