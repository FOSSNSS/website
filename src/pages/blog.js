import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

const BlogPage = ({ data }) => (
  <div className="mainbody">
    <SEO title="Blog" />
    <Header />
    <div className="site-content">
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author}
            <br /> On {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
    <Footer />
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
