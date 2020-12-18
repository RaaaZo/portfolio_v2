import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled(motion.div)`
  min-height: 82vh;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`

export const StyledSpan = styled.span`
  color: var(--green);
  font-weight: 700;
  transition: color 0.5s ease;
`

export const ContentWrapper = styled(motion.div)`
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
    }
    @media (min-width: 1360px) {
      font-size: 6rem;
    }
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 5rem;
    @media (min-width: 768px) {
      margin-bottom: 5rem;
      margin-bottom: 7rem;
    }
    @media (min-width: 1360px) {
      font-size: 5rem;
      margin-bottom: 7rem;
    }
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--white);
    transition: color 0.5s ease;

    &:hover {
      color: var(--green);
    }

    &:hover ${StyledSpan} {
      color: var(--white);
    }

    @media (min-width: 1360px) {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    order: 2;
    flex: 1;
    align-self: flex-start;
  }

  @media (min-width: 1024px) {
    max-width: 620px;
  }
`

export const Button = styled(motion.button)`
  border: 3px solid var(--green);
  background-color: transparent;
  color: var(--white);
  padding: 2rem 3rem;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: color 0.5s ease, border-color 0.5s ease;

  &:hover {
    color: var(--green);
    border-color: var(--white);
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    padding: 2rem 5rem;
  }

  @media (min-width: 1360px) {
    padding: 2rem 7rem;
    margin-bottom: 7rem;
  }
`

export const ImageWrapper = styled(motion.div)`
  width: 90%;
  max-width: 650px;
  /* max-height: 80vh; */

  @media (min-width: 768px) {
    flex: 1;

    .gatsby-image-wrapper {
      max-width: 650px;
      max-height: 80vh;
    }
  }
  /* @media (min-width: 1100px) {
    max-height: 70vh;
    .gatsby-image-wrapper {
      order: 1;
      max-height: 70vh;
    }
  } */
  @media (min-width: 1360px) {
    margin-right: 10%;
  }
`
