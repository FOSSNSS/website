import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import SEO from '../components/seo';
import Footer from '../components/footer';

const SecondPage = ({ data }) => (
    <div className='mainbody'>
        <SEO title='Meet the Team' />
        <Header />
        <div
            className='site-content'
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            <div className='showmembers'>
                {data.allMarkdownRemark.edges.map(member => (
                    <div key={member.node.id} className='member-card'>
                        <a href={member.node.frontmatter.url}>
                            <img
                                src={member.node.frontmatter.avathar}
                                alt={`Avathar of ${member.node.frontmatter.name} from Gitlab/Github`}
                            />
                            <h5>{member.node.frontmatter.name}</h5>
                <h6>{member.node.frontmatter.designation}</h6>
                            <p>Email: {member.node.frontmatter.email}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

export const MembersQuery = graphql`
    query MemberIndexQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/members/.*md$/" } }
            sort: { fields: [frontmatter___name], order: ASC }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        avathar
                        designation
                        url
                        dept
                        email
                        phone
                        skills
                    }
                }
            }
        }
    }
`;

export default SecondPage;
