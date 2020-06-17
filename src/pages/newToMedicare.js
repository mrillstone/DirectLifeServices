import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Button from "../components/button"

class NewToMedicare extends React.Component {
  render() {
    const siteTitle = ""

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        /> */}
        <img style={{ margin: 0 }} src="./logo.png" alt="Direct Life Services" />
        <h3 style={{ margin: 0 , paddingLeft: "30%" }}>Full site coming soon test</h3>
        
        <Link to="/blog/">
          <Button marginTop="35px" style={{marginLeft: `auto`, marginRight: `auto`}}>Enter Site</Button>
        </Link>
      </Layout>
    )
  }
}

export default NewToMedicare
