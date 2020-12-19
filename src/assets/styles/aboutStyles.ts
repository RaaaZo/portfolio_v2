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
  grid-template-rows: auto auto auto;
  grid-gap: 3rem;
  margin: 5rem auto;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
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

  p {
    margin: 2rem auto;
  }

  @media (min-width: 1024px) {
    grid-column: 1/2;
    grid-row: 2/4;
    padding: 1rem;
  }
`

export const ImageWrapper = styled(motion.div)`
  width: 100%;
  max-width: 650px;
  border-radius: 15px;
  overflow: hidden;
  justify-self: center;

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 650px;
  }

  @media (min-width: 600px) {
    max-height: 700px;

    .gatsby-image-wrapper {
      max-height: 700px;
    }
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 1/4;
    height: 1000px;
    align-self: center;
    margin-top: 10rem;

    .gatsby-image-wrapper {
      height: 1000px;
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
    font-size: 2.2rem;
    margin: 3rem 0;

    &:nth-of-type(1) {
      text-align: left;
    }

    &:nth-of-type(2) {
      text-align: center;
      font-size: 2.5rem;
      font-family: "Dancing Script", sans-serif;
      color: var(--green);

      @media (min-width: 450px) {
        font-size: 4rem;
      }
    }

    &:nth-of-type(3) {
      text-align: right;
    }

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }
`
