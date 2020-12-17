import { motion } from "framer-motion"
import React from "react"
import {
  Wrapper,
  HeadingText,
  Heading,
  ButtonsWrapper,
} from "../assets/styles/infoStyles"
import InfoButton from "../components/InfoButton"
import SingleHeading from "../components/SingleHeading"
import { headingData, skillsData, upcomingSkillsData } from "../data/infoData"
import {
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"

const InfoPage = () => {
  return (
    <Wrapper>
      <HeadingText>
        <motion.h4 variants={fromLeftToRight} initial="hidden" animate="show">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsum
          magnam non laborum doloremque ducimus vel ipsam amet accusamus quidem
          autem eius perspiciatis debitis doloribus rerum, laboriosam blanditiis
          aspernatur distinctio laudantium animi! Assumenda accusamus distinctio
          omnis, at ad perferendis repellendus!
        </motion.h4>
      </HeadingText>
      <Heading variants={fadeInWithStagger} initial="hidden" animate="show">
        {headingData.map(item => (
          <SingleHeading data={item} key={item.id} />
        ))}
      </Heading>

      <motion.h1 variants={fromRightToLeft} initial="hidden" animate="show">
        Co umiem
      </motion.h1>
      <ButtonsWrapper>
        {skillsData.map(item => (
          <InfoButton data={item} key={item.id} />
        ))}
      </ButtonsWrapper>

      <motion.h1 variants={fromRightToLeft} initial="hidden" animate="show">
        Kolejne do nauki
      </motion.h1>
      <ButtonsWrapper>
        {upcomingSkillsData.map(item => (
          <InfoButton data={item} key={item.id} />
        ))}
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default InfoPage
