import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

import '../styles/partials/layouts/_blog.scss';
import Img from 'gatsby-image';

export default function Template({
    data,
}) {
    return (
        <div className='mainbody'>
            <SEO title='Blog' />
            <Header />
            <div className='site-content'>

                <div className="post-content">
                    <h1 className="center">Latest Posts</h1>
                    <div className='container'>
                        {data.allMarkdownRemark.edges.map(post => (
                            <Link className='link' to={post.node.frontmatter.path}>
                                <div key={post.node.id} className='card'>
                                    <div className='cover'>
                                        <Img
                                            style={{ height: '100%', border: '1px solid #eaecef' }}
                                            fluid={
                                                post.node.frontmatter.cover
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    </div>

                                    <div className='cardbody'>
                                        <h3>{post.node.frontmatter.title}</h3>
                                        <span>{post.node.frontmatter.desc}</span>
                                        <div className="post-author">
                                            <img
                                                src={`https://github.com/${post.node.frontmatter.author}.png?size=70`}
                                                alt={`Avathar of ${post.node.frontmatter.name}`}
                                            />
                                            <div>
                                                <p>By {post.node.frontmatter.name}</p>
                                                <p>On {post.node.frontmatter.date}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        cover {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    srcSet
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                        desc
                        name
                        tag
                        title
                        date
                        author
                    }
                    timeToRead
                }
            }
        }
    }
`;


