import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const createLink = (url, text) => {
    return {
        "url": url,
        "text": text,
    }
}

const Header = ({ siteTitle }) => {
    const links = [createLink("/#about", "About"), createLink("/#services", "Services"),
        createLink("/#gallery", "Gallery")]
    
    return (
    <header className="flex items-center justify-center py-4 gap-5">
        <div className="flex-shrink-0 ml-10 cursor-pointer">
                <span class="ml-1 text-3xl font-semibold"><Link to="/">Lily Pozos</Link></span>
        </div>
        <nav className="hidden md:display-block">
            <ul className="flex mr-10 font-semibold">
                {links.map(link => (
                    <li className="mr-6 p-1">
                        <Link to={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Implement Me`,
}

export default Header