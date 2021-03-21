import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
        markdownRemark(frontmatter: {key: {eq: "services"}}) {
          html
        }
      }
    `)

    return ( 
      <div>
        <h1>Services I provide!</h1>
        <ul class="list-disc pl-4">
          <li>Custom T Shirts</li>
          <li>Custom Coffee Mugs</li>
          <li>Rental Property Management (AirBnb's, etc)</li>
          <li>Event Planning</li>
          <li>Graphic Design</li>
        </ul>
        {/* <h1>Services Section</h1>
        <p>This will be the services section</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div> */}
      </div>
    )
}

export default Services