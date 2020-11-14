import React from "react";
import { Layout } from "../../components/layout";
import Head from "next/head";
import Titre from "./[id]";

const Categories = () => {
    return (
        <>
            <Head>
                <title>Catégories</title>
            </Head>
            <Layout>
                <h1>Categories</h1>
            </Layout>
        </>
    )
}

export default Categories;
