import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Gallery = () => {
    const items = useStaticQuery(graphql`
    query GalleryQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "gallery"}}}) {
          edges {
            node {
              frontmatter {
                title
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(width: 200, height: 200)
                  }
                }
              }
            }
          }
        }
      }
    `)

    return ( 
      <div>
        <h1>Check out my work below</h1>
        <div className="grid grid-cols-3">
            {items.allMarkdownRemark.edges.map(item => (
                <div>
                    <GatsbyImage image={getImage(item.node.frontmatter.featuredImage)} />
                    <p>{item.node.frontmatter.title}</p>
                </div>
            ))}
        </div>
      </div>
    )
}

export default Gallery
