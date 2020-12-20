import i18n from "i18next"
import translations from "./translations.json"

import aboutEn from "../locale/about/aboutEn.json"
import aboutPl from "../locale/about/aboutPl.json"
import homeEn from "../locale/home/homeEn.json"
import homePl from "../locale/home/homePl.json"
import contactEn from "../locale/contact/contactEn.json"
import contactPl from "../locale/contact/contactPl.json"
import infoEn from "../locale/info/infoEn.json"
import infoPl from "../locale/info/infoPl.json"

export const resources = {
  en: {
    about: aboutEn,
    home: homeEn,
    contact: contactEn,
    info: infoEn,
  },
  pl: {
    about: aboutPl,
    home: homePl,
    contact: contactPl,
    info: infoPl,
  },
} as const

i18n.init({
  ns: ["home", "about", "info", "contact"],
  resources: resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
