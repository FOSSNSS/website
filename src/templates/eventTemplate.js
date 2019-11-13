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
                <Link to='/events'>Go Back</Link>
                <hr />
                <h1>{frontmatter.title}</h1>
                <h4>
                    Posted by {frontmatter.author} on {frontmatter.date}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: html }} />
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
                date
            }
        }
    }
`;
