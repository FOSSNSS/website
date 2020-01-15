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
            }
        `}
        render={data => (
            <div className='treesect'>
                <div className='treeimage'>
                    <Img
                        fluid={data.treeImgLoc.childImageSharp.fluid}
                        className='treeimg'
                    />
                </div>
                <div className='treetext'>
                    <h1>
                        Building Community <br />
                         Through Sharing
                    </h1><br/><br/>
                    <span className='treequote1'>&ldquo;</span>
                    <p className='treedesc'>
                        Sharing knowledge is the most fundamental act of
                        friendship. Because it is a way you can give something
                        without loosing something.
                    </p>
                    <div className='treequote2'>
                        <div className='quotediv'></div>
                        <span className='quote'>&rdquo;</span>
                    </div>
                    <p className='quoteauthor'>― Richard Stallman</p>
                </div>
            </div>
        )}
    />
);
