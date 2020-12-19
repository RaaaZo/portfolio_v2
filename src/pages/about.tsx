import React from "react"
import { graphql, PageProps } from "gatsby"
import { DataPropsImage } from "../utils/types/DataPropsImage"
import {
  fadeIn,
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"
import Img from "gatsby-image"
import {
  AboutWrapper,
  ContentWrapper,
  HeadingWrapper,
  ImageWrapper,
  Line,
  Wrapper,
} from "../assets/styles/aboutStyles"
import AboutContent from "../components/AboutContent"
import { motion } from "framer-motion"
import WelcomeContent from "../components/WelcomeContent"

const AboutPage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <Wrapper variants={fadeInWithStagger} initial="hidden" animate="show">
        <ContentWrapper>
          <HeadingWrapper>
            <motion.h1 variants={fadeIn}>Hej!</motion.h1>
            <Line variants={fromLeftToRight} />
            <WelcomeContent
              firstSpan="Nazywam się"
              secondSpan="Mateusz Koprowicz"
              thirdSpan="i jestem web-developerem"
            />
            <Line variants={fromRightToLeft} />
          </HeadingWrapper>

          <ImageWrapper variants={fadeIn} initial="hidden" animate="show">
            <Img fluid={data.file.childImageSharp.fluid} alt="Ja w koszuli" />
          </ImageWrapper>

          <AboutWrapper>
            <AboutContent />
          </AboutWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "cv" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
