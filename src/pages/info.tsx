import { motion } from "framer-motion"
import React from "react"
import { Line } from "../assets/styles/aboutStyles"
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
        <motion.h1>Wprowadzenie</motion.h1>
        <Line className="line" />
        <motion.h4 variants={fromLeftToRight} initial="hidden" animate="show">
          Tworzenie stron internetowych stało się moją pasją w połowie zeszłego
          roku. Od tamtego czasu poznałem wiele technologii. Niektóre przypadły
          mi do gustu bardziej niż inne. Dlatego też po poznaniu Reacta zostałem
          przy nim na dłużej. W międzyczasie nauczyłem się również Node.js,
          który w połączeniu z MongoDB pozwalają w szybki sposób stworzyć
          pełnoprawny backend na potrzeby stron internetowych. W niedalekiej
          przyszłości chcę poznać technologię pozwalającą na pisanie aplikacji
          mobilnych. Będzie to prawdopodobnie ReactNative.
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
        Kolejne kroki
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
