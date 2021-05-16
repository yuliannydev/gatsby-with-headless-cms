import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { formatDate } from "../../utils"
import { Layout, Seo } from "../../components"
import ReactMarkdown from "react-markdown"


const PostLayout = ({ data: { graphCmsPost: post, cover } }) => {

    const shareImage = post.cover.url
    return (
        <Layout>
        <Seo 
        title={post.seo.title} 
        description={ post.seo.description }  
        image={shareImage}
        />

        <div className="container px-5 mx-auto">
        <GatsbyImage 
        image={getImage(cover)} 
        alt={post.seo.title} 
        className="h-64 lg:h-[380px]"
        />

        <section className="mt-10 max-w-[980px] mx-auto">
            <h1 className="font-bold text-5xl text-[#2D3748]">{post.title}</h1>

            <div className="mt-5 flex space-x-[56px]">
                <p className="font-bold text-[#2D3748]">Escrito por Yulianny Betancourt</p>

                <p className="text-[#718096]">{formatDate(post.publishedAt, "PP")}</p>
            </div>

            <hr className="my-8 border-gray-200"/>

            <div className="box-border max-w-full mb-[58px]">
            <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </section>
        </div>

    </Layout>
    )}

export const query = graphql `
    query Post($id: String!, $slug: String!) {
        graphCmsPost(slug: { eq: $slug }) {
            id
            title
            slug
            cover {
                url 
                }
            category
            content
            seo {
                title
                description
                image {
                    url 
                    }
                }
            publishedAt
            }

        cover: graphCmsAsset(coverPost: { elemMatch: { id: { eq: $id }}}) {
            gatsbyImageData(layout: FULL_WIDTH)
          }
    }
`

export default PostLayout