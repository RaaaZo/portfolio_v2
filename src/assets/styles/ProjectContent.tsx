import React from "react"
import styled from "styled-components"
import { Line } from "./aboutStyles"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { fadeIn } from "../../utils/animations/variants"

const slashMotion = {
  rest: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
}

const ProjectContent = () => {
  const windowSize = window.innerWidth

  const controls = useAnimation()
  const [element, view] = useInView({ rootMargin: "300px 0px" })

  if (view) {
    controls.start("show")
  } else {
    controls.start("hidden")
  }

  return (
    <ContentWrapper
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h1>E-shop</h1>
      <StyledLine />
      <ImageWrapper initial="rest" whileHover="hover" animate="rest">
        <motion.img
          src="https://images.pexels.com/photos/2660212/pexels-photo-2660212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1500&w=1260"
          alt=""
        />
        {/* @ts-expect-error */}
        <LinksWrapper variants={windowSize >= 1024 ? slashMotion : null}>
          <motion.a
            whileHover={{ scale: 1.2, borderColor: "var(--pink)" }}
            whileTap={{ scale: 0.8 }}
            href="https://github.com/"
          >
            Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, borderColor: "var(--pink)" }}
            whileTap={{ scale: 0.8 }}
            href="https://github.com/"
          >
            Live
          </motion.a>
        </LinksWrapper>
      </ImageWrapper>
    </ContentWrapper>
  )
}

const ContentWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1360px;
  margin: 5rem auto;

  h1 {
    font-size: 5rem;
  }
`

const ImageWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 1024px) {
    max-height: 600px;
  }

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;

    @media (min-width: 1024px) {
      max-height: 600px;
    }
  }
`

const LinksWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  a {
    width: 150px;
    margin: 0 3rem;
    color: #000;
    padding: 1rem;
    font-weight: 700;
    border: 3px solid var(--green);
    background-color: var(--white);
    border-radius: 15px;
    text-align: center;
  }
`

const StyledLine = styled(Line)`
  background-color: var(--green);
  margin: 3rem 0;
`

export default ProjectContent
