import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductGrid = () => {
    const products = useStaticQuery(graphql`
    query ProductsQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "product"}}}) {
          edges {
            node {
              frontmatter {
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(quality: 100, height: 900, width: 900)
                  }
                }
                price
                tags
                title
              }
              html
            }
          }
        }
      }            
    `)
    
    return (
      <div>
        <h1>Check out some of my work below</h1>
        <div className="grid grid-cols-3 py-4">
            {products.allMarkdownRemark.edges.map(product => (
                <div>
                    <GatsbyImage image={getImage(product.node.frontmatter.thumbnail)} />
                </div>
            ))}
        </div>
      </div>
    )
}

export default ProductGrid