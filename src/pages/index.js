import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <h1>Hi people</h1>
    <p>Welcome to FOSS NSS</p>
    <p>
      This is the official site of FOSSCell of NSS COllege of
      Engineering,Palakkad.
    </p>
    <p>This site is preparing for something :)</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/members/">members</Link>
    <br />
    <Link to="/blog/">Blog</Link>
    <br />
    <Link to="/events/">Events</Link>
  </div>
)

export default IndexPage
