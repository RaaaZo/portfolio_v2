import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled(motion.div)`
  background-color: var(--pages-background);
  background-image: url("../assets/images/contact.svg");
  min-height: 82vh;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MediaWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .image-wrapper {
    display: none;
    align-self: flex-start;
    max-height: 400px;
    border-radius: 15px;
    overflow: hidden;

    .gatsby-image-wrapper {
      width: 100%;
      max-height: 400px;
    }

    @media (min-width: 1024px) {
      display: block;
      width: 100%;
      justify-content: space-between;
      max-height: 350px;
    }
  }
`

export const SocialMediaWrapper = styled(motion.div)`
  h1 {
    text-align: center;
    margin: 5rem;
    font-size: 5rem;
  }

  @media (min-width: 1024px) {
    width: 50%;

    h1 {
      margin-left: 0;
    }
  }
`

export const IconsWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 3rem;

  @media (min-width: 1024px) {
    justify-content: center;
    align-self: flex-start;
    margin-left: 0;
  }

  .icon {
    width: 75px;
    height: 75px;
    color: black;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      color: var(--pink);
      transform: scale(1.1);
    }

    @media (min-width: 1024px) {
      margin: 2rem 3rem 0 3rem;
    }
  }
`

export const WelcomeWrapper = styled(motion.div)`
  @media (min-width: 1024px) {
    align-self: flex-end;
    width: 70%;
    margin-right: 10rem;
  }
`
