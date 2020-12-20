import React from "react"

import GlobalStyles from "../assets/styles/GlobalStyles"
import Navigation from "./Navigation"

import "normalize.css"
import Footer from "./Footer"
import LanguageComponent from "./LanguageComponent"
import { I18nextProvider } from "react-i18next"
import i18next from "../i18n/config"

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <I18nextProvider i18n={i18next}>
        <LanguageComponent />
        {children}
      </I18nextProvider>
      <Footer />
    </>
  )
}

export default Layout
