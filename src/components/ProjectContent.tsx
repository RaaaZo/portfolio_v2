import React from "react"
import styled from "styled-components"
import { Line } from "../assets/styles/aboutStyles"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { fadeIn } from "../utils/animations/variants"
import { Fluid } from "../utils/types/DataPropsImage"
import Img from "gatsby-image"

const projectAnimation = {
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

interface Props {
  data: {
    githubUrl: string
    liveUrl: string
    title: string
  }
  image:
    | {
        fluid: Fluid
      }
    | undefined
}

const ProjectContent: React.FC<Props> = ({
  image,
  data: { githubUrl, liveUrl, title },
}) => {
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
      <h1>{title}</h1>
      <StyledLine />
      <ImageWrapper initial="rest" whileHover="hover" animate="rest">
        <motion.div>
          {/* @ts-expect-error */}
          <Img fluid={image.fluid} alt={title} />
        </motion.div>

        {/* @ts-expect-error */}
        <LinksWrapper variants={windowSize >= 1024 ? projectAnimation : null}>
          <motion.a
            whileHover={{ scale: 1.2, borderColor: "var(--pink)" }}
            whileTap={{ scale: 0.8 }}
            href={githubUrl}
          >
            Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, borderColor: "var(--pink)" }}
            whileTap={{ scale: 0.8 }}
            href={liveUrl}
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

  @media (min-width: 768px) {
    width: 90%;
  }
`

const ImageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 200px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 1024px) {
    max-height: 600px;
  }

  .gatsby-image-wrapper {
    width: 100%;
    min-height: 200px;
    max-height: 400px;

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

    @media (min-width: 768px) {
      margin: 0 8rem;
    }

    @media (min-width: 1360px) {
      margin: 0 10rem;
    }
  }
`

const StyledLine = styled(Line)`
  background-color: var(--green);
  margin: 3rem 0;
`

export default ProjectContent
