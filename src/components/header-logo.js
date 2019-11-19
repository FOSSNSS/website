import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
export default () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `);
    return (
        <div>
            <Link to='/'>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt='FOSS NSS Logo'
                    className='header-logo'
                />
            </Link>
        </div>
    );
};
