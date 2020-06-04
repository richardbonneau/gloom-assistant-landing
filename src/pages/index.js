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
const Store = styled.div`
  width: 75%;
`

const StoresContainer = styled.div`
  display: flex;
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
        <div>
          <h1>Get to the fun faster</h1>
          Gloomhaven Assistant aims to assist players in the setup and flow of
          combat in the #1 trending boardgame in 2020, Gloomhaven.
          <StoresContainer>
            <Store>
              {" "}
              <Img fluid={data.google.childImageSharp.fluid} />
            </Store>
            <Store>
              <Img fluid={data.apple.childImageSharp.fluid} />
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
