import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  background-color: var(--pages-background);
  padding: 5rem 2rem;

  @media (min-width: 1024px) {
    padding: 5rem 0rem;
  }
`
export const ContentWrapper = styled(motion.div)`
  max-width: 1400px;
  width: 90%;
  max-width: 700px;
  display: grid;
  grid-template-rows: auto 400px auto;
  grid-gap: 3rem;
  margin: 5rem auto;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 400px auto;
    max-width: 100%;
  }

  @media (min-width: 1360px) {
    gap: 6rem;
  }
`

export const HeadingWrapper = styled(motion.div)`
  width: 100%;
  h1 {
    margin-bottom: 3rem;
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`

export const AboutWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  text-align: justify;
  text-align-last: center;

  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 2/4;
    padding: 1rem;
  }
`

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 400px;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 1/4;
    height: 700px;
    align-self: center;
    margin-top: 10rem;

    .gatsby-image-wrapper {
      height: 700px;
    }
  }

  @media (min-width: 1024px) {
    align-self: start;
  }
`

export const Line = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: var(--pink);
  border-radius: 50%;
  align-self: flex-start;
`

export const WelcomeDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  span {
    width: 100%;
    display: block;
    font-size: 2.6rem;
    margin: 3rem 0;

    &:nth-of-type(1) {
      text-align: left;
    }

    &:nth-of-type(2) {
      text-align: center;
      font-size: 4rem;
      font-family: "Dancing Script", sans-serif;
      color: var(--green);
    }

    &:nth-of-type(3) {
      text-align: right;
    }

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`
