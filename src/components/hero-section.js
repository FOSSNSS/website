import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
            query HeroLocQuery {
                heroImgLoc: file(relativePath: { eq: "landing-hero.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `}
        render={data => (
            <div className='herosect'>
                <div className='herotext'>
                    <h1>Free and Open Source <br />Software Cell</h1>
                    <br />
					<p className="herodesc">A collective of students to bring out freedom and liberation through inspiring and creating skills for collaboration and spreading of FOSS and it's culture.</p>
                    <div className='buttons'>
                        <a
                            href='https://kutt.it/3dworkshop'
                            className='btn btn-active'>
                            Become a Member
                        </a>
                        <Link to='/about' className='btn btn-ghost'>
                            Know More
                        </Link>
                    </div>
                </div>
                <div className='heroimage'>
                    <Img
                        fluid={data.heroImgLoc.childImageSharp.fluid}
                        className='heroimg'
                    />
                </div>
            </div>
        )}
    />
);
