import { NextPageContext } from "next";
import HomePage from "src/components/home";
import { Tweet } from "src/types";

export const getServerSideProps = async ({ res }: NextPageContext) => {
  let tweets: Tweet[] = [];

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      tweets,
      avatars: [],
      count: 0,
    },
  };
};

export default HomePage;
