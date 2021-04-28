import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';


const ConductPage = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(
                fileAbsolutePath: { regex: "/CODE_OF_CONDUCT.md/" }
            ) {
                frontmatter {
                    title
                }
                html
            }
        }
    `);
    const styleObj = {
        fontSize: '1.2em',
        padding: '.5rem',
        lineHeight: '1.5',
      };
    return (
        <div className='mainbody'>
            <SEO title={`${data.markdownRemark.frontmatter.title} • Code of Conduct `} />
            <Header />

            <div className='site-content'>
                <div className="post-content">
                    <p className='breadcrumps'>
                        <span role="img" aria-label="Feels like lost? You are here">🧭 </span>: {' '}
                        <Link to='/' className='breadlink'>
                            Home
                    </Link>{' '}
                    >>{' '}
                        <Link to='/codeofconduct' className='breadlink'>
                            Code of Conduct
                    </Link>{' '}
                    </p>

                    <div className="simpleline"></div>
                    <div className='Code of Conduct'>
            <div  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} style={styleObj}></div>
        </div>
                    
            </div>
            </div>
            <Footer />
        </div>
        
    )
};

export default ConductPage;
