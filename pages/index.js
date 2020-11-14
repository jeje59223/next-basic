import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const Home = ({ data }) => {
  const styleH1 = {
    textAlign: "center",
  };
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };

  return (
    <>
    <Head>
      <title>Liste des régions</title>
    </Head>
      <Layout>
      <div className="container">
          <h1 style={styleH1}>Liste des Régions</h1>
          {data.map((region) => (
            <div style={styles} key={region.code}>
              <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
                <h2>{region.nom}</h2>
              </Link>
              <p>{region.code}</p>
            </div>
          ))}
      </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  // on les données
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);

  return {
    props: {
      data,
    },
  };
}

export default Home;
