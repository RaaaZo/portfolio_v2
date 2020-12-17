import { motion } from "framer-motion"
import styled from "styled-components"
import { Wrapper, ImageWrapper } from "./homePageStyles"

export const StyledWrapper = styled(Wrapper)`
  width: 100%;
  background-color: var(--pages-background);
  margin: 0;
  padding: 5rem;

  @media (min-width: 1360px) {
    margin-right: 0;
  }
`

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  gap: 3rem;

  h1 {
    align-self: flex-start;
  }

  p {
    text-align: justify;
    text-align-last: center;
    margin: 3rem auto;
  }

  @media (min-width: 768px) {
    max-width: 400px;
  }
  @media (min-width: 1360px) {
    max-width: 40%;
  }
  @media (min-width: 1600px) {
    max-width: 40%;
  }
`

export const Line = styled(motion.div)`
  width: 90%;
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
    font-size: 3rem;
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
  }
`

export const StyledImageWrapper = styled(ImageWrapper)`
  margin-top: 5rem;
  @media (min-width: 768px) {
    margin-left: 3rem;
    min-height: 50vh;

    .gatsby-image-wrapper {
      order: 1;
      min-height: 50vh;
    }
  }

  @media (min-width: 1360px) {
    margin-right: 0;
  }
`
