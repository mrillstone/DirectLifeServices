import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import Nav from "./nav"

import { rhythm, scale } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <header>
            {/* {header} */}
            <Nav />
          </header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main style={{
            paddingTop: "10rem", 
            paddingBottom: "10rem"
            }}
          >
            {children}
          </main>
        </div>
        <Footer>
          <div style={{float: `left`, fontSize: "15px", marginTop: "35px"}}>
            © {new Date().getFullYear()} Direct Life Services All Rights Reserved
          </div>
          <div style={{float: `right`}}>
            <a style={{color: `black`, boxShadow: `none`, fontSize: "50px"}} href="https://www.facebook.com/Directlifeservices"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          </div>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
