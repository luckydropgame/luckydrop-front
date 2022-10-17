import { NextPageContext } from "next";
import Detail from "src/components/detail";

export const getServerSideProps = async ({ res, query }: NextPageContext) => {
  let tweet: any = {};
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      detail: tweet,
    },
  };
};
export default Detail;
