//

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve('src/templates/blogTemplate.js');
    const eventTemplate = path.resolve('src/templates/eventTemplate.js');

    return graphql(
        `
            {
                allMarkdownRemark {
                    edges {
                        node {
                            id
                            frontmatter {
                                path
                            }
                        }
                    }
                }
            }
        `
    ).then(res => {
        if (res.errors) {
            return Promise.reject(errors);
        }

        res.data.allMarkdownRemark.edges.map(element => {
            let path = element.node.frontmatter.path;

            if (path) {
                //create page for blog using template
                if (path.includes(`/blog/`)) {
                    createPage({
                        path,
                        component: blogTemplate,
                    });
                } else if (path.includes(`/events/`)) {
                    createPage({
                        path,
                        component: eventTemplate,
                    });
                }
            }
        });
    });
};
