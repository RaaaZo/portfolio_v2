import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

export const HomeLine = () => {
  return (
    <StyledHomeSvg
      viewBox="0 0 1440 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M-28 2C25.7905 251.373 337 443 460 446C583 449 874 265 1028 294.5C1182 324 1254.05 438.294 1478 430.5"
        stroke="#FF00FF"
        stroke-opacity="0.4"
        stroke-width="10"
      />
    </StyledHomeSvg>
  )
}

export const ContactLine = () => {
  return (
    <StyledContactSvg
      viewBox="0 0 1884 703"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2 }}
        d="M1.5 5.5C1.5 5.5 234 74 421 207.5C608 341 459 177 646 186.5C833 196 751 238 1046.5 436.5C1342 635 1304 419.5 1502.5 520.5C1701 621.5 1882 698 1882 698"
        stroke="#00C896"
        stroke-width="10"
      />
    </StyledContactSvg>
  )
}

const StyledHomeSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`
const StyledContactSvg = styled.svg`
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
`
