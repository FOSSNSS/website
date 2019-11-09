import React from "react"
// import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

const SecondPage = () => (
  <div className="mainbody">
  <SEO title="About" />
  <Header />
  <div className="site-content">
    <h3>Here are some History lessons</h3>
    <ul>
      <li>1st part</li>
      <li>2nd part</li>
      <li>3rd part</li>
      <li>4th part</li>
    </ul>
  </div>
  <Footer />
</div>
)

export default SecondPage
