import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
            query TreeLocQuery {
                treeImgLoc: file(relativePath: { eq: "banyan.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                rmsImgLoc: file(relativePath: { eq: "rms.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 120) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <div className='tree-sect'>
                <div className='tree-text'>
                    <h1 class="underline-small">Building Community Through Sharing</h1>
                </div>
                
                <div className="tree-stuff">
                    <div className='tree-imgcontainer'>
                        <Img
                            fluid={data.treeImgLoc.childImageSharp.fluid}
                            className='tree-img'
                        />
                    </div>
                    <div className="testimon">
                    <hr className="quote-line" />
                    <div className="testimonial-quote group right">
                        <div className="quote-container">
                            <div>
                                <blockquote>
                                    <p>Sharing knowledge is the most fundamental
                                    act of friendship. Because it is a way
                                    you can give something without loosing
                                        something.”</p>
                                </blockquote>
                                <cite>
                                    <span>Richard Stallman</span><br />
                                        Founder<br />
                                        Free Software Foundation
                                </cite>
                            </div>
                        </div>
                    </div>
                    <hr className="quote-line" />
                </div>
                </div>

            </div>
        )}
    />
);
