import React from "react"
// import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

const SecondPage = () => (
  <div className="mainbody">
    <SEO title="Meet the Team" />
    <Header />
    <div className="site-content">
      <h1>Our TEAM!</h1>

      <br />
      <div>
        <h5>Member 1</h5>
        <p>Member desc</p>
      </div>
      <div>
        <h5>Member 2</h5>
        <p>Member desc</p>
      </div>
      <div>
        <h5>Member 3</h5>
        <p>Member desc</p>
      </div>
    </div>
    <Footer />
  </div>
)

export default SecondPage
