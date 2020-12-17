import React from "react"
import { motion } from "framer-motion"
import {
  fadeIn,
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"
import { ContentWrapper, Line } from "../assets/styles/aboutStyles"
import WelcomeContent from "./WelcomeContent"

const AboutContent = () => {
  return (
    <ContentWrapper variants={fadeInWithStagger}>
      <motion.h1 variants={fadeIn}>Hej!</motion.h1>

      <Line variants={fromLeftToRight} />

      <WelcomeContent
        firstSpan="Nazywam się"
        secondSpan="Mateusz Koprowicz"
        thirdSpan="i jestem web-developerem"
      />

      <motion.p variants={fromRightToLeft}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse
        facilis dolore vel. Dolores animi, eligendi asperiores consequuntur
        voluptate porro natus assumenda minus culpa nobis officiis repellendus
        libero aliquam atque.
      </motion.p>

      <Line variants={fromRightToLeft} />

      <motion.p variants={fromLeftToRight}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat omnis
        dicta quae exercitationem vel repudiandae eos quo? Illo, deleniti nemo?
      </motion.p>
    </ContentWrapper>
  )
}

export default AboutContent
