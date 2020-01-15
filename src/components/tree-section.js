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
					<span className ='treequote1'>&ldquo;</span><p className='treedesc'>With software there are only two possibilites: either the users control the programme or the programme controls the users. If the programme controls the users, and the developer controls the programme, then the programme is an instrument of unjust power.</p><div className = 'treequote2'><div className = 'quotediv'></div><span className ='quote'>&rdquo;</span></div>
                    <p className = 'quoteauthor'>― Richard Stallman</p>

                </div>
            </div>
        )}
    />
);
