import React from "react"

import GlobalStyles from "../assets/styles/GlobalStyles"

import "normalize.css"

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Layout
