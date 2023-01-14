import React from "react"
import { motion } from "framer-motion"

import { Line } from "../assets/styles/aboutStyles"
import { useTranslation } from "react-i18next"

const AboutContent = () => {
  const { t } = useTranslation("about")

  return (
    <>
      <motion.p>{t("aboutContent.firstParagraph")}</motion.p>

      <Line />

      <motion.p>{t("aboutContent.secondParagraph")}</motion.p>

      <Line />

      <motion.p>{t("aboutContent.thirdParagraph")}</motion.p>
    </>
  )
}

export default AboutContent
