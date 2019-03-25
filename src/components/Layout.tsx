import React from 'react'
import { Link } from '@reach/router'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <menu>
        <div>
          <Link to="/">Calculator</Link>
        </div>
        <div>
          <Link to="/matrix">Matrix</Link>
        </div>
        <div>
          <Link to="/canvas">Canvas</Link>
        </div>
      </menu>
      {children}
    </>
  )
}

export default Layout
