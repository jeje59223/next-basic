import React from "react";
import {useRouter} from "next/router";
import {Layout} from "../../components/layout";
import axios from "axios";
import Head from "next/head";

const Titre = ({data}) => {
    return (
        <>
            {
                data && (
                    <>
                        <Head>
                            <title>{data.title}</title>
                        </Head>
                        <Layout>
                            <h1>{data.title}</h1>
                            <div>
                                <img src={data.pictures[0]} />
                            </div>
                            <p>{data.description}</p>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export const getStaticPaths = async () => {
    // on récupère l'url de base
    const url = "https://aqueous-meadow-07678.herokuapp.com";
    // on récupère les données
    const {data} = await axios.get(`${url}/api/posts`);
    // on met nos data dans posts
    const posts = data.data;
    // on recupere un tableau d'id de post
    const paths = posts.map(post => ({
        params: {id: post._id}
    }))

    return {paths, fallback: true}
}

export const getStaticProps = async (context) => {
    const url = "https://aqueous-meadow-07678.herokuapp.com";
    const id = context.params.id;
    const {data} = await axios.get(`${url}/api/post/${id}`);

    return {
        props: {
            data
        }
    }
}

export default Titre;
