import { NextPageContext } from 'next'
import Awards from 'src/components/awards'

export const getServerSideProps = async ({ res }: NextPageContext) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
  return {
    props: {},
  }
}

export default Awards
