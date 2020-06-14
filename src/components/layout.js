/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Main = styled.main`
  @media (min-width: 768px) {
    height: 60vh;
    display: flex;
    align-items: center;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("data.site.siteMetadata", data.site.siteMetadata)
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          height: "100vh",
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <Main>{children}</Main>
        <footer style={{ bottom: "0", position: "absolute" }}>
          © {new Date().getFullYear()},{` `}
          <a href="https://www.richardbonneau.com">Richard Bonneau</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
