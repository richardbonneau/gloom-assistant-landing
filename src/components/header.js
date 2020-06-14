import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import React from "react"
import Img from "gatsby-image"

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 0;

  h4 {
    margin: 0;
    margin-left: 12px;
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gloomicon.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log("data", data, data.file.childImageSharp.fixed)
  return (
    <header>
      <Container>
        <Img fixed={data.file.childImageSharp.fixed} />
        <h4>{siteTitle}</h4>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
