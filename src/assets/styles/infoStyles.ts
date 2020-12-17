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
    margin: 3rem;
    font-size: 5rem;
  }
`

export const Heading = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 700px);
  justify-content: center;
  gap: 6rem 4rem;
  margin: 2rem auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 450px));
    gap: 8rem 6rem;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(2, minmax(300px, 600px));
    gap: 10rem 8rem;
  }
`

export const HeadingText = styled(motion.div)`
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

export const ButtonsWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`
