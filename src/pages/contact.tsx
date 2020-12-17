import { motion } from "framer-motion"
import React from "react"
import WelcomeContent from "../components/WelcomeContent"

import { IconContext } from "react-icons"
import { FaGithubSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { fadeIn, fromLeftToRight } from "../utils/animations/variants"
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import { DataPropsImage } from "../utils/types/DataPropsImage"
import {
  Wrapper,
  WelcomeWrapper,
  SocialMediaWrapper,
  IconsWrapper,
  MediaWrapper,
} from "../assets/styles/contactStyles"

const ContactPage: React.FC<PageProps<DataPropsImage>> = ({ data }) => {
  return (
    <>
      <Wrapper initial="hidden" animate="show">
        <WelcomeWrapper>
          <WelcomeContent
            firstSpan="Spodobały Ci się projekty?"
            secondSpan="Napisz do mnie!"
            thirdSpan="Bądźmy w kontakcie."
          />
        </WelcomeWrapper>

        <MediaWrapper>
          <SocialMediaWrapper initial="hidden" animate="show">
            <motion.h1 variants={fadeIn}>Social Media</motion.h1>
            <IconsWrapper variants={fromLeftToRight}>
              <IconContext.Provider value={{ className: "icon" }}>
                <a href="https://github.com/RaaaZo">
                  <FaGithubSquare />
                </a>
              </IconContext.Provider>

              <IconContext.Provider value={{ className: "icon" }}>
                <FaMailBulk
                  onClick={() =>
                    window.open("mailto:Koprowicz.mateusz@gmail.com")
                  }
                />
              </IconContext.Provider>

              <IconContext.Provider value={{ className: "icon" }}>
                <a href="https://www.linkedin.com/in/mateusz-koprowicz">
                  <FaLinkedin />
                </a>
              </IconContext.Provider>
            </IconsWrapper>
          </SocialMediaWrapper>

          <motion.div variants={fadeIn} className="image-wrapper">
            <Img fluid={data.file.childImageSharp.fluid} />
          </motion.div>
        </MediaWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    file(name: { eq: "contact" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 425, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
