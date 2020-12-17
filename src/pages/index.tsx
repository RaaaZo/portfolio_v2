import React from "react"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import { fadeIn } from "../utils/animations/variants"
import { HomeLine } from "../components/SvgLines"
import { ImageWrapper, Wrapper } from "../assets/styles/homePageStyles"
import { DataPropsImage } from "../utils/types/DataPropsImage"
import HomeContent from "../components/HomeContent"

const HomePage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <Wrapper>
        <HomeLine />
        <HomeContent />
        <ImageWrapper variants={fadeIn} initial="hidden" animate="show">
          <Img fluid={data.file.childImageSharp.fluid} alt="lorem" />
        </ImageWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage
