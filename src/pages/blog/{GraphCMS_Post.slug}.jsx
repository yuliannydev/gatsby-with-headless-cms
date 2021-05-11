import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout, Seo } from "../../components"

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
                }

        cover: graphCmsAsset(coverPost: { elemMatch: { id: { eq: $id }}}) {
            gatsbyImageData(layout: FULL_WIDTH)
          }
    }
`

export default PostLayout