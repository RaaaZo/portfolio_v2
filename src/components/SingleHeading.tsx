import React, { ReactElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { fadeIn } from "../utils/animations/variants"

interface Props {
  data: {
    svg: any
    name: string
    description: string
  }
}

const SingleHeading: React.FC<Props> = ({
  data: { description, name, svg },
}) => {
  const Svg = svg

  return (
    <ContentWrapper variants={fadeIn} whileHover={{ scale: 1.05 }}>
      <SvgWrapper>
        <Svg className="svg" />
      </SvgWrapper>
      <motion.h3>{name}</motion.h3>
      <Line />
      <motion.p>{description}</motion.p>
    </ContentWrapper>
  )
}

const ContentWrapper = styled(motion.div)`
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: auto auto auto 100%;

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
