import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="mainbody">
    <SEO title="Home" />
    <Header />
    <div className="site-content">
      <h1>Hi people</h1>
      <p>Welcome to FOSS NSS</p>
      <p>
        This is the official site of FOSSCell of NSS COllege of
        Engineering,Palakkad.
      </p>
      <p>This site is preparing for something :)</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <p>Hey....</p>
        <p>
          Sed consequat sapien eget justo accumsan, sit amet posuere elit
          dignissim. Vestibulum
        </p>
        <hr />
        
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage
