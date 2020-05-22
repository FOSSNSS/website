import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className='mainbody'>
            <SEO title={`${frontmatter.title} - Events - `} />
            <Header />
            <div className='site-content'>
                <div className="post-content">
                    <p className='breadcrumps'>
                        <span role="img" aria-label="Feels like lost? You are here">🧭 </span>: {' '}
                        <Link to='/' className='breadlink'>
                            Home
                    </Link>{' '}
                    >>{' '}
                        <Link to='/events' className='breadlink'>
                            Events
                    </Link>{' '}
                    >> <span className="breadcurrentloc">{`${frontmatter.title.slice(0, 15)}`}...</span>
                    </p>
                    <h1 className="templateH1">{frontmatter.title}</h1>
                    <div className="post-author">
                        <img
                            src={`https://github.com/${frontmatter.author}.png?size=70`}
                            alt={`Avathar of ${frontmatter.name}`}
                        />
                        <div>
                            <p><i class="fa fa-pencil colored-icon-pink" aria-hidden="true"></i> {frontmatter.name}</p>
                            <p><i class="fa fa-calendar-o colored-icon-ora" aria-hidden="true"></i> {frontmatter.datestring}</p>
                        </div>
                    </div>
                    <div className="simpleline"></div>
                    <div
                        class='markdown-body'
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const postQuery = graphql`
    query EventPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                name
                date
                datestring
            }
        }
    }
`;
