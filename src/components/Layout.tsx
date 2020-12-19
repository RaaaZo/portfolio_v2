import React from "react"

import GlobalStyles from "../assets/styles/GlobalStyles"
import Navigation from "./Navigation"

import "normalize.css"
import Footer from "./Footer"
import SEO from "./SEO"

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
