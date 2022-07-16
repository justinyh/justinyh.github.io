import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({menuLinks}) => (
  <header className="bg-primary mb-4 flex h-10 justify-center items-center fixed w-full z-50">
    {menuLinks.map(link => (
      <div key={link.name} className="p-2 text-white font-bold">
        <Link
          to={link.link}
        >
          {link.name.toUpperCase()}
        </Link>
      </div>
    ))}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Justin`,
}

export default Header
