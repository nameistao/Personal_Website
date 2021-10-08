import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

const Home: NextPage = () => {
  const [curPage, setCurPage] = useState("about");

  return (
    <>
      <title>Tao Luo</title>
      <Head>
        <title>Tao Luo</title>
        <meta name="description" content="Tao Luo's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main curPage={curPage} />
      <Footer />
    </>
  );
};

export default Home;
