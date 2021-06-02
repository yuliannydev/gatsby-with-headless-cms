import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  )
}

export const query = graphql`
  query HomePosts {
    featuredPost: allGraphCmsPost(
      limit: 1
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        ...PostInfo
      }
    }
    allGraphCmsPost(
      skip: 1
      limit: 3
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        ...PostInfo
      }
    }
  }
  fragment PostInfo on GraphCMS_Post {
    id
    title
    slug
    cover {
      url
    }
    seo {
      title
      description
      image {
        url
      }
    }
    publishedAt
  }
`

export default IndexPage
