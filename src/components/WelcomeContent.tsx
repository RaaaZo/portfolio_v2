import { motion } from "framer-motion"
import React from "react"
import { WelcomeDiv } from "../assets/styles/aboutStyles"
import { fromLeftToRight, fromRightToLeft } from "../utils/animations/variants"

interface Props {
  firstSpan: string
  secondSpan: string
  thirdSpan: string
}

const WelcomeContent: React.FC<Props> = ({
  firstSpan,
  secondSpan,
  thirdSpan,
}) => {
  return (
    <WelcomeDiv>
      <motion.span variants={fromLeftToRight}>{firstSpan}</motion.span>{" "}
      <motion.span variants={fromRightToLeft} className="green">
        {secondSpan}
      </motion.span>{" "}
      <motion.span variants={fromLeftToRight}>{thirdSpan}</motion.span>
    </WelcomeDiv>
  )
}

export default WelcomeContent
