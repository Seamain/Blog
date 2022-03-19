import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";

import Seo from "../components/seo";

export default ({data}) => {
    const post = data.directus.article_by_id

    return (
        <Layout>
            <h1>{post.title}</h1>

            <div className="article">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($id: ID!){
        directus {
            article_by_id(id: $id) {
                title
                tags
                content
                author {
                    name
                }
            }
        }
    }

`