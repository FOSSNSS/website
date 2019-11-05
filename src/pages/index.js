import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import "../components/home/home.scss"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to FOSS NSS</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
