import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default () => (
    <StaticQuery
        query={graphql`
        query EventsLandingQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/events/.*md$/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 3) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    cover {
                      publicURL
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                          srcSet
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                    title
                    date
                    author
                  }
                }
              }
            }
          }
        `}
        render={data => (
            <div className='event-sect'>
                <div className='event-text'>
                    <h1 class="underline-small">Latest Events</h1>
                </div>
                <div className='event-latest'>
                    {data.allMarkdownRemark.edges.map(post => (
                        <Link to={post.node.frontmatter.path} key={post.node.id} className='event-list-link'>
                            <div key={post.node.id} className='event-card'>
                                <Img
                                    className="event-img"
                                    fluid={
                                        post.node.frontmatter.cover.childImageSharp
                                            .fluid
                                    }
                                />
                                <center>
                                    <h3>{post.node.frontmatter.title}</h3>
                                    <img alt=""src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAFZklEQVRIieWXf4hc1RXHP+e+9+b3zm6StYk2qTEQo8ZUkQjSWoothf5REUWC9U9R4i8EBUVEEP2roAUVVJYglqZ/tEKRgNA/WrANhGiItqjB1WYT3agxMbMzOzvzZt6ve/zjzeybN7NJ4989cHjvnnPu+Z5z7rn33ScAqiqLMW+qcruCowpKyqzxXIOORAV+uVOkc36TPAnAl6ob4ohzdgRwFEz1wsACGMtPtlfk8MUCuwCbRRonA31G4VYFGQA7quxScOIwxNoEt1Rey8cpgQNXljmyb9++jdba/t69e5cvKuPz0Xxf9yXW3vv+W38hjkKuv/VOvEp11MR6JWauElmZm5v7kTFmHlianp7etmfPnvB/Ah+P9KdYnrZwCQrOsu8Wjp+uWZGt8ZlzztuL7wLw89lrqF+xLe8gTs6KtZ3mwkL9YOf4LMCdn5hnZ23hmKPSc2L3PXnjnm8ngFVVFiJOq7LRKhRPfsOm197G9COwCX53iVeudQG4678RW2QGvELeSxRySlv8ebsHwEMfJ1QqM+C4AG0R82tv7v7c+rv/BGezUhs21vQ/juD0V9KowmWwy/h+Wl5NeoiNwNuQBw4bqOnh+4MesF1MZFGnDlAPL1n32mehvuoo57YVOCAiiblFJEZ4QOG0Al67gWgX0S6YHjVdYnOrzbqVDpuiBsZ0V/VDNo7PpqjBupUuW1ptaroExl/Va1mvU8uchb+eCHgEBl29vSD7gf0A8X2PHwa9CQAPxAvZe+6LNBNTwBbWA/mmVQ8qUZfHzjQH4wrq2RG7mVRO9nAnFr3SuYxulAnKNUhcUIs6JURWJje0gFbqSNIHMeCUEG1l6xkWUeEw8Py2IgfWBDZbCzX6ZkxaTP2HMXR741NGyB3Ekd9J7lQP4JUdRXkrbzlKN+8sIM75fQfLoPYC4GtMqV6KVV6d7+s9Rlg2ht9PAmNZPVdsAppkKrWg8fcCHUxEoQ78QhXUsnsSWJLsPEva6ZpNb0qfUQ/aHSjWoDbYUp0GBB2o/wC8MsQhnD0BxoBXzHwqqKSuFZoXzrhQhQ1bYHZLpp4/CFuvg9JUOg46cPIoXHFDZuN6sPgReN5qxsCKwp9E+EoT/rAWcJLrWlGwI81iFMSOyBIwMmYjUPAGSaTJWHh0V0leXzUBONbTuz/s6ZOqagianxA0yLiVOh1y3IfIz8ahn8pGbYjAc9KgSACLI+TOWfeoqkefPyo4/+lx8HrGmqdxAoJmGmPUh6gDp/6dlbq3DFEAJ98Ft5g2YKc5ABxSgsILn/b0Zwj7d5Tkb+5ukehYT59T2Noq8wHE5L6WhRLUZ9PyhUG6ncpVmN6Q1ax1huTvBXTJggfObg+Z8bPKRx0EKir81gi3vaM67QLsLMtzQyM99EQ+46n1UKml76UqNBdh/aVZxzoO+sW3cOTUarg6M4Xs7GaxJ19nOuG9W0Ri99O+PqzwYAJFq9Cbf/GHZf/LEeQYNMiVDYKRYzNECBGTfXJl7Ew1Sdh14MeJYnd4LAK4IvwOpWoY3K8M6b4bUtACO5OWPw4h9qHXguq6VO83oRogtWXohuAYZHYqXzWsXlmSE6MSV+BlhUcEqkZASNIsh7RyNuVROvNZfuyB3Ls5fe9ZiMaP1MlrotlelKd2lKSmIbMCn1sZ3QYXwZqAb6E94GgCg3wmA2AAVTVS5iqj1P361d8PmGQNt2Mkemhc5AIsBPzLEW5WA82NvwIs1fZHSBLkjM93ry7oSuL6nWBSoxEOh2g07piI5R1V9/KQtoXy6mV+cP+yY+O1/ihkwFhu3FWVoxdKPAcMsBDrb0zC3RbcIRiaAQ9pfDwCfOiakrx0saD/n/QdC+6fg5tbq68AAAAASUVORK5CYII="/>
                                    <span>{post.node.frontmatter.date}</span>
                        
                                </center>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
    />
);
