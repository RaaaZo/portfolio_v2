import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

export const HomeLine = () => {
  return (
    <StyledSvg
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
    </StyledSvg>
  )
}

export const AboutLine = () => {
  return (
    <StyledSvg
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2 }}
        d="M0 1080C0 1080 217.42 871.64 354.047 873.723C490.674 875.807 1160.01 969.569 1276.28 961.929C1392.54 954.289 1843.15 575.074 1496.33 486.868C1149.5 398.662 1920 0 1920 0"
        stroke="#00C896"
        stroke-opacity="0.5"
        stroke-width="10"
      />
    </StyledSvg>
  )
}

export const InfoLine = () => {
  return (
    <StyledSvg
      viewBox="0 0 1440 930"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2 }}
        d="M-24 5C-24 5 270.913 57.4744 359.775 138.935C448.638 220.395 346.446 369.322 408.65 410.302C470.854 451.282 987.923 347.833 1190.09 503.756C1392.25 659.68 1480 1029 1480 1029"
        stroke="#00C896"
        stroke-opacity="0.5"
        stroke-width="10"
      />
    </StyledSvg>
  )
}

export const ProjectsLine = () => {
  return (
    <StyledSvg
      viewBox="0 0 1440 918"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2 }}
        d="M-10 934C-10 934 2 629.5 107.5 582C213 534.5 606.5 512.5 612.5 474.5C618.5 436.5 1000 415 1153 450.5C1306 486 1437.5 1.5 1437.5 1.5"
        stroke="#00C896"
        stroke-opacity="0.5"
        stroke-width="10"
      />
    </StyledSvg>
  )
}

export const ContactLine = () => {
  return (
    <StyledSvg
      viewBox="0 0 1440 892"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2 }}
        d="M1 3C1 3 140.5 319.5 243.5 327.5C346.5 335.5 627.5 540 705 625.5C782.5 711 999.5 743 1176 729C1352.5 715 1442.5 894 1442.5 894"
        stroke="#00C896"
        stroke-opacity="0.5"
        stroke-width="10"
      />
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`
