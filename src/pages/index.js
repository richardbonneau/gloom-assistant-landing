import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const ImageContainer = styled.div`
  width: 100%;
`
const Store = styled.div`
  width: 75%;
`

const StoresContainer = styled.div`
  display: flex;
`

const Description = styled.div`
  padding: 12px 0;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      hero: file(relativePath: { eq: "gloom.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
      google: file(relativePath: { eq: "googleplay.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple: file(relativePath: { eq: "apple.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("data", data)
  return (
    <Layout>
      <Container>
        <div style={{ marginRight: "20px" }}>
          <h1>Get to the fun faster</h1>
          <Description>
            Gloomhaven Assistant aims to assist players in the setup and flow of
            combat in the #1 trending boardgame in 2020, Gloomhaven.
          </Description>
          <StoresContainer>
            <Store>
              {" "}
              <Img fluid={data.google.childImageSharp.fluid} />
            </Store>
            <Store>
              <Img
                style={{ opacity: "50%" }}
                fluid={data.apple.childImageSharp.fluid}
              />
            </Store>
          </StoresContainer>
        </div>
        <ImageContainer>
          {" "}
          <Img fluid={data.hero.childImageSharp.fluid} />
        </ImageContainer>
      </Container>
    </Layout>
  )
}

export default IndexPage
