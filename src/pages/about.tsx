import React from "react"
import { motion } from "framer-motion"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { DataPropsImage } from "../utils/types/DataPropsImage"
import { Wrapper, ImageWrapper } from "../assets/styles/homePageStyles"
import {
  fadeIn,
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"
import Img from "gatsby-image"

const AboutPage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <StyledWrapper
        variants={fadeInWithStagger}
        initial="hidden"
        animate="show"
      >
        <ContentWrapper variants={fadeInWithStagger}>
          <motion.h1 variants={fadeIn}>Hej!</motion.h1>

          <motion.div variants={fromLeftToRight} className="line" />

          <WelcomeDiv>
            <motion.span variants={fromLeftToRight}>Nazywam się</motion.span>{" "}
            <motion.span variants={fromRightToLeft} className="green">
              Mateusz Koprowicz
            </motion.span>{" "}
            <motion.span variants={fromLeftToRight}>
              i jestem web-developerem.
            </motion.span>
          </WelcomeDiv>

          <motion.p variants={fromRightToLeft}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse
            facilis dolore vel. Dolores animi, eligendi asperiores consequuntur
            voluptate porro natus assumenda minus culpa nobis officiis
            repellendus libero aliquam atque.
          </motion.p>

          <motion.div variants={fromRightToLeft} className="line" />

          <motion.p variants={fromLeftToRight}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            omnis dicta quae exercitationem vel repudiandae eos quo? Illo,
            deleniti nemo?
          </motion.p>
        </ContentWrapper>

        <StyledImageWrapper variants={fadeIn}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Moje zdjęcie w koszuli"
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "about" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  background-color: var(--pages-background);
  margin: 0;
  padding: 5rem;

  @media (min-width: 1360px) {
    margin-right: 0;
  }
`

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  gap: 3rem;

  .line {
    width: 90%;
    height: 4px;
    background-color: var(--pink);
    border-radius: 50%;
    align-self: flex-start;
  }

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

const WelcomeDiv = styled(motion.div)`
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

const StyledImageWrapper = styled(ImageWrapper)`
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

export default AboutPage
