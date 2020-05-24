import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';
import ReactUtterences from 'react-utterances'
import '../styles/partials/layouts/_blogTemplate.scss';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className='mainbody'>
            <SEO title={`${frontmatter.title} • Blog `} />
            <Header />

            <div className='site-content'>
                <div className="post-content">
                    <p className='breadcrumps'>
                        <span role="img" aria-label="Feels like lost? You are here">🧭 </span>: {' '}
                        <Link to='/' className='breadlink'>
                            Home
                    </Link>{' '}
                    >>{' '}
                        <Link to='/blog' className='breadlink'>
                            Blog
                    </Link>{' '}
                    >> <span className="breadcurrentloc">{`${frontmatter.title.slice(0, 15)}`}...</span>
                    </p>
                    <h1 className="templateH1">{frontmatter.title}</h1>
                    <h2 className='desc'>{frontmatter.desc}</h2>
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
                    <br />
                    <div className="commenthead">
                        <img src="https://img.icons8.com/cotton/64/000000/comments--v2.png" alt="comment icon" />
                        <div>
                            <h2>Comments</h2>
                            <span><p>Comments will be processed with privacy policy of <a href="https://utteranc.es">utteranc.es</a> and <a href="https://github.com">GitHub</a></p></span>
                        </div>
                    </div>
                    <ReactUtterences repo={'FOSSNSS/comment'} type={'url'} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
                name
                date
                datestring
                desc
            }
        }
    }
`;
