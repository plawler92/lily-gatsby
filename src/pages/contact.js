import React from "react";
import Layout from "../components/layout"
import ContactForm from "../components/contactform"

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="flex justify-center mt-8">
                <ContactForm />
            </div>
        </Layout>
    )
}

export default Contact