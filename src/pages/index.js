import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => (
  <div className="mainbody">
    <SEO title="Home" />
    <Header />
    <div className="content">
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
          dignissim. Vestibulum pellentesque enim in elementum lobortis. Etiam
          ut lorem id diam accumsan varius in vel leo. In eu ultrices diam, eget
          venenatis turpis. Mauris vitae dolor non risus efficitur imperdiet.
          Sed gravida, enim in suscipit faucibus, quam nisl vestibulum turpis,
          vel viverra ante massa id ex. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Maecenas aliquet ante nulla, sed interdum ex porta sed
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default IndexPage
