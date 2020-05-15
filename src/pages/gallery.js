import Img from "gatsby-image";
import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: {sourceInstanceName: {eq: "gallery"}}, sort: {order: ASC, fields: name}) {
          nodes {
            id
            name
            publicURL
            childImageSharp {
              fluid(maxWidth: 1000) {
                srcSet
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    `}
    render={data => (
        <div className='mainbody'>
            <SEO title='About' />
            <Header />
            <div className='gallerysec'>
                <div className='grid'>
                    {data.allFile.nodes.map(image => (
                        <div className='tile'
                        key={image.id}>
                        <Img alt={image.name} fluid={image.childImageSharp.fluid} className='singleimage' />
                        </div>
                    ))}
                </div>
            )}
            </div>
            <Footer />
        </div>
    )}
  ></StaticQuery>
)

export default ComponentName

