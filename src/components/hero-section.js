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
            <div className='hero-sect'>
                <div className='hero-text'>
                    <p className="hero-desc">
                        A collective of students to bring out freedom through
                 inspiration,<br /> building skills for collaboration
                 and spreading of FOSS including its ideology.
                 </p>

                    <h1>Free and Open Source Software cell NSSCE</h1>
                    <br />
                    <a
                        href='http://kutt.it/fossnss-membership'  target='blank'
                        className='cta-btn lined thin'>
                        BECOME A MEMBER
                        </a>
                    <br />
                    <p className="marginfix">&nbsp;</p>
                    <Link to='/about' className='cta-sec'>
                        Learn More
                    </Link>
                    &nbsp;about FOSSNSS
                </div>
                <div className='hero-imgcontainer'>
                    <Img
                        fluid={data.heroImgLoc.childImageSharp.fluid}
                        className='hero-img'
                    />
                </div>
            </div>
        )}
    />
);
