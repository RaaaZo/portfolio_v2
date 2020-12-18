import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled(motion.div)`
  background-color: var(--pages-background);
  padding: 5rem 2rem;
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  h1 {
    margin-bottom: 3rem;
    font-size: 5rem;
    text-align: center;
    text-align-last: center;
  }
`

export const Heading = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 700px);
  justify-content: center;
  gap: 6rem 4rem;
  margin: 3rem auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 450px));
    gap: 8rem 6rem;
    margin: 5rem auto;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(2, minmax(300px, 600px));
    gap: 10rem 8rem;
  }
`

export const HeadingText = styled(motion.div)`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem auto;

  .line {
    background-color: var(--green);
    width: 100%;
  }

  h1 {
    align-self: flex-start;
    font-size: 5rem;
  }

  h4 {
    font-size: 1.8rem;
    text-align: justify;
    text-align-last: center;
    margin-top: 2rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`

export const ButtonsWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`
