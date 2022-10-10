import { NextPageContext } from 'next'
import About from 'src/components/about'

export const getServerSideProps = async ({ res }: NextPageContext) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
  return {
    props: {},
  }
}

export default About
