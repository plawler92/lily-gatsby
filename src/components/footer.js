import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaCopyright, FaMusic } from "react-icons/fa"

const Footer = () => (
    <footer className="bg-blue-400">
        <div className="flex flex-col justify-center items-center">
            <div>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="flex flex-row gap-2">
                Follow me
                <a href="https://www.facebook.com/LilahBerry" target="_blank"><FaFacebook /></a>
                <a href="https://www.instagram.com/lilypozos/" target="_blank"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@lilypozos?lang=en&is_copy_url=1&is_from_webapp=v2" target="_blank"><FaMusic /></a>
            </div>
            <div className="flex flex-row gap-2">
                <FaCopyright /> Lily Pozos 2021.
            </div>
        </div>
    </footer>
)

export default Footer