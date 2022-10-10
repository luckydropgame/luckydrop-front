import { NextPageContext } from "next";
import Detail from "src/components/detail";
import { Tweet } from "src/types";

export const getServerSideProps = async ({ res, query }: NextPageContext) => {
  let tweet: any = {};

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      art: tweet,
    },
  };
};
export default Detail;
