import React from "react"
import { motion } from "framer-motion"
import { contentWrapperVariants, fadeIn } from "../utils/animations/variants"
import {
  Button,
  ContentWrapper,
  StyledSpan,
} from "../assets/styles/homePageStyles"
import { useTranslation } from "react-i18next"

// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HomeContent = () => {
  const { t } = useTranslation("home")

  return (
    <ContentWrapper
      variants={contentWrapperVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={fadeIn}>Mateusz Koprowicz</motion.h1>
      <motion.h2 variants={fadeIn}>Frontend Developer</motion.h2>

      <AniLink fade to="/info">
        <Button variants={fadeIn}>{t("button")}</Button>
      </AniLink>

      <AniLink fade to="/contact">
        <motion.p variants={fadeIn}>
          {t("firstParagraph")}{" "}
          <StyledSpan className="green"> {t("span")} </StyledSpan>{" "}
          {t("secondParagraph")}
        </motion.p>
      </AniLink>
    </ContentWrapper>
  )
}

export default HomeContent
