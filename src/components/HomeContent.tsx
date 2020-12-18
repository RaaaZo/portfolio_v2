import React from "react"
import { motion } from "framer-motion"
import { contentWrapperVariants, fadeIn } from "../utils/animations/variants"
import {
  Button,
  ContentWrapper,
  StyledSpan,
} from "../assets/styles/homePageStyles"

// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HomeContent = () => {
  return (
    <ContentWrapper
      variants={contentWrapperVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={fadeIn}>Mateusz Koprowicz</motion.h1>
      <motion.h2 variants={fadeIn}>Web-Developer</motion.h2>

      <AniLink fade to="/info">
        <Button variants={fadeIn}>Informacje</Button>
      </AniLink>

      <AniLink fade to="/contact">
        <motion.p variants={fadeIn}>
          Skontaktuj się <StyledSpan className="green"> ze mną </StyledSpan> w
          sprawie współpracy...
        </motion.p>
      </AniLink>
    </ContentWrapper>
  )
}

export default HomeContent
