import React from "react"
import { graphql, Link, PageProps, navigate } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { contentWrapperVariants, fadeIn } from "../utils/animations/variants"
import { HomeLine } from "../components/SvgLines"
import {
  Button,
  ContentWrapper,
  ImageWrapper,
  StyledSpan,
  Wrapper,
} from "../assets/styles/homePageStyles"
import { DataPropsImage } from "../utils/types/DataPropsImage"

const IndexPage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <Wrapper>
        <HomeLine />
        <ContentWrapper
          variants={contentWrapperVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeIn}>Mateusz Koprowicz</motion.h1>
          <motion.h2 variants={fadeIn}>Web-Developer</motion.h2>

          <Button onClick={() => navigate("/info")} variants={fadeIn}>
            Informacje
          </Button>

          <Link to="/contact">
            <motion.p variants={fadeIn}>
              Skontaktuj się <StyledSpan className="green"> ze mną </StyledSpan>{" "}
              w sprawie współpracy...
            </motion.p>
          </Link>
        </ContentWrapper>
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

export default IndexPage
