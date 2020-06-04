import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "gloom.png" }) {
        childImageSharp {
          fixed {
            base64
            src
            srcSet
            width
            height
          }
        }
      }
    }
  `)

  console.log("data", data)
  return (
    <Layout>
      <Container>
        <Img fixed={data.file.childImageSharp.fixed} />
        <div>
          {" "}
          Gloomhaven Assistant aims to assist players in the setup and flow of
          combat in the boardgame Gloomhaven.
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
