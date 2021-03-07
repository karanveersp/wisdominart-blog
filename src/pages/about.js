import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const About = props => {
  return (
    <div>
      <Layout location={props.location}>
        <h2 className="postTitle">About</h2>
        <p className="postBody">
          I'm Karanveer and this blog is my effort to share some good knowledge
          about drawing and painting.
          <br />
          <br />
        </p>
        <div className="centerAndBotMargin">
          <a
            href={props.data.site.siteMetadata.social.youtubeUrl}
            target="_blank"
            rel="noreferrer">
            youtube
          </a>
          &nbsp;&bull;&nbsp;
          <a
            href={props.data.site.siteMetadata.social.instagramUrl}
            target="_blank"
            rel="noreferrer">
            instagram
          </a>
        </div>
      </Layout>
      <SEO title="About" description="About Wisdom in Art" />
    </div>
  )
}

export const pageQuery = graphql`
  query AboutSummary {
    site {
      siteMetadata {
        social {
          youtubeUrl
          instagramUrl
        }
      }
    }
  }
`

export default About
