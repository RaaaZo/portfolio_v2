import React from "react"
import { graphql, PageProps } from "gatsby"
import { DataPropsImage } from "../utils/types/DataPropsImage"
import { fadeIn, fadeInWithStagger } from "../utils/animations/variants"
import Img from "gatsby-image"
import { StyledWrapper, StyledImageWrapper } from "../assets/styles/aboutStyles"
import AboutContent from "../components/AboutContent"

const AboutPage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <StyledWrapper
        variants={fadeInWithStagger}
        initial="hidden"
        animate="show"
      >
        <AboutContent />
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

export default AboutPage
