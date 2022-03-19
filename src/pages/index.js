import React from "react"
import Layout from "../components/layout"
import {graphql,Link} from "gatsby";
import {css} from "@emotion/react";
import {rhythm} from "../utils/typography";

export default ({data}) => {
    const posts = data.directus.article

    return(
        <Layout>
            <div>
                <h1
                    css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
                >
                    Seamain's Blog
                </h1>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link
                            to={"/blog/" + post.slug}
                            css = {css`
                              text-decoration: none;
                              color: inherit;
                            `}
                            >
                        <h3
                            css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
                        >
                            {post.title}{" "}
                            <span
                                css={css`
                  color: #bbb;
                `}
                            >
                — {post.createdDate}
              </span>
                        </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        directus {
            article {
                id
                slug
                title
                tags
                createdDate
            }
        }
    }

`
