// Author: Denil Verghese
// E-mail: denilcv@gmail.com

import React from "react"
import { Link } from "gatsby"

// import SEO from "../components/seo"

const BlogPage = ({ data }) => (
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} 
            <br/> On{' '}{post.node.frontmatter.date}
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
  )
  
  export const pageQuery = graphql`
    query BlogIndexQuery {
      allMarkdownRemark {
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
  
  
