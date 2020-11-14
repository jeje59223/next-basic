import React from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Head from "next/head";
import {Layout} from "../../components/layout";

const CodeRegion = ({data}) => {
    // console.log(data);
    return (
        <>
            {
                data && (
                    <>
                        <Head>
                            <title>{data.nom}</title>
                        </Head>
                        <Layout>
                            <h1>Région : {data.nom}</h1>
                            <p>Code : {data.code}</p>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export const getServerSideProps = async (context) => {
    // on récupère le code région
    const code = context.params.code;
    // on récupère l'url de base de l'api
    const url = "https://geo.api.gouv.fr";
    // on récupère les données de l'api
    const {data} = await axios.get(`${url}/regions/${code}`);
    // on retourne les props
    return {
        props: {
            data
        }
    }
}

export default CodeRegion;
