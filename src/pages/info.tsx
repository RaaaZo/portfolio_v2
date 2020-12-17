import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import InfoButton from "../components/InfoButton"
import SingleHeading from "../components/SingleHeading"
import {
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"

const InfoPage = () => {
  return (
    <Wrapper>
      <HeadingText>
        <motion.h4 variants={fromLeftToRight} initial="hidden" animate="show">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsum
          magnam non laborum doloremque ducimus vel ipsam amet accusamus quidem
          autem eius perspiciatis debitis doloribus rerum, laboriosam blanditiis
          aspernatur distinctio laudantium animi! Assumenda accusamus distinctio
          omnis, at ad perferendis repellendus!
        </motion.h4>
      </HeadingText>
      <Heading variants={fadeInWithStagger} initial="hidden" animate="show">
        <SingleHeading />
        <SingleHeading />
        <SingleHeading />
        <SingleHeading />
      </Heading>

      <motion.h1 variants={fromRightToLeft} initial="hidden" animate="show">
        Co umiem
      </motion.h1>
      <ButtonsWrapper>
        <InfoButton />
      </ButtonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  background-color: var(--pages-background);
  padding: 5rem 2rem;
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  h1 {
    margin: 3rem;
    font-size: 5rem;
  }
`

const Heading = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 700px);
  justify-content: center;
  gap: 6rem 4rem;
  margin: 2rem auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 450px));
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(2, minmax(300px, 600px));
  }
`

const HeadingText = styled(motion.div)`
  width: 90%;
  max-width: 1200px;
  text-align: justify;
  text-align-last: center;
  margin: 5rem auto;

  h4 {
    font-size: 1.8rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`

const ButtonsWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`

export default InfoPage
