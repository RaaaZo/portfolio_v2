import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { fadeIn } from "../utils/animations/variants"

// @ts-expect-error
import Responsive from "../assets/images/responsive.svg"

const SingleHeading = () => {
  return (
    <ContentWrapper variants={fadeIn} whileHover={{ scale: 1.05 }}>
      <SvgWrapper>
        <Responsive className="svg" />
      </SvgWrapper>
      <motion.h3>Title</motion.h3>
      <Line />
      <motion.p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio
        unde accusamus reiciendis sequi, similique quos explicabo! Cumque,
        reiciendis ut.
      </motion.p>
    </ContentWrapper>
  )
}

const ContentWrapper = styled(motion.div)`
  display: grid;
  grid-gap: 3rem;

  h3 {
    text-align: center;
    font-size: 4rem;
  }

  p {
    text-align: justify;
    text-align-last: center;
    padding: 0 3rem;
  }
`

const SvgWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  .svg {
    width: 100%;
    height: 200px;
  }
`

export const Line = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: var(--pink);
  border-radius: 50%;
`

export default SingleHeading
