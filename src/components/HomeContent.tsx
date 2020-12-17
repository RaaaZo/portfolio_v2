import React from "react"
import { Link, navigate } from "gatsby"
import { motion } from "framer-motion"
import { contentWrapperVariants, fadeIn } from "../utils/animations/variants"
import {
  Button,
  ContentWrapper,
  StyledSpan,
} from "../assets/styles/homePageStyles"

const HomeContent = () => {
  return (
    <ContentWrapper
      variants={contentWrapperVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={fadeIn}>Mateusz Koprowicz</motion.h1>
      <motion.h2 variants={fadeIn}>Web-Developer</motion.h2>

      <Button onClick={() => navigate("/info")} variants={fadeIn}>
        Informacje
      </Button>

      <Link to="/contact">
        <motion.p variants={fadeIn}>
          Skontaktuj się <StyledSpan className="green"> ze mną </StyledSpan> w
          sprawie współpracy...
        </motion.p>
      </Link>
    </ContentWrapper>
  )
}

export default HomeContent
