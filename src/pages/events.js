import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';
import '../styles/partials/layouts/_events.scss';
import Img from 'gatsby-image';

const EventPage = ({ data }) => (
    <div className='mainbody'>
        <SEO title='Events' />
        <Header />
        <div className='site-content'>
            <div className="event-list">
                <div className="blog-heading">
                        <h1 class="underline-small">Latest Events</h1>
                </div>
                <div className='event-container'>
                    {data.allMarkdownRemark.edges.map(post => (
                        <Link to={post.node.frontmatter.path} key={post.node.id} className='link'>
                            <div key={post.node.id} className='event-card'>
                                <Img
                                    style={{ height: '100%' }}
                                    fluid={
                                        post.node.frontmatter.cover.childImageSharp.fluid
                                    }
                                />
                                <h3>{post.node.frontmatter.title}</h3>
                                <p><i class="fa fa-calendar-o colored-icon-ora" aria-hidden="true"></i> {post.node.frontmatter.datestring}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export const pageQuery = graphql`
    query EventsIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
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
                        title
                        date
                        datestring
                        author
                    }
                }
            }
        }
    }
`;

export default EventPage;
