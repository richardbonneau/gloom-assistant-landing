import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
const ImageContainer = styled.div`
  width: 100%;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "gloom.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const title = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const data = useStaticQuery(graphql`
  // query MyQuery {
  //   file(relativePath: { eq: "gloom.png" }) {
  //     childImageSharp {
  //       fluid {
  //         base64
  //         aspectRatio
  //         sizes
  //         src
  //         srcSet
  //       }
  //     }
  //   }

  //   site {
  //     siteMetadata {
  //       title
  //     }
  //   }
  // }
  // `)

  console.log("data", data)
  return (
    <Layout>
      <Container>
        <ImageContainer>
          {" "}
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImageContainer>
        <div>
          {" "}
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
          Gloomhaven Assistant aims to assist players in the setup and flow of
          combat in the boardgame Gloomhaven.
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
