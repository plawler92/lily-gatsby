import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head";


const Layout = ({ title, children }) => {
    const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
        site {
          siteMetadata {
            title
          }
        }
      }      
    `)

    return (
        // <div className="flex flex-col min-h-screen">
        <div className="flex flex-col min-h-screen justify-between bg-blue-50">
            <Head title={title} siteTitle={data.site.siteMetadata?.title} />
            <Header siteTitle={data.site.siteMetadata?.title}/>
            <main className="flex-grow container mx-auto flex flex-col items-center py-4">
                {children}
            </main>
            {/* <div className="flex-1 overflow-y-auto p-5"> */}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout