import { motion } from "framer-motion"
import React from "react"
import { useTranslation } from "react-i18next"
import { Line } from "../assets/styles/aboutStyles"
import {
  Wrapper,
  HeadingText,
  Heading,
  ButtonsWrapper,
} from "../assets/styles/infoStyles"
import InfoButton from "../components/InfoButton"
import SEO from "../components/SEO"
import SingleHeading from "../components/SingleHeading"
import { headingData, skillsData } from "../data/infoData"
import {
  fadeInWithStagger,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"

interface HeadingAndButtonsData {
  id: string
  svg: any
}

const InfoPage = () => {
  const { t } = useTranslation("info")

  return (
    <>
      <SEO />
      <Wrapper>
        <HeadingText>
          <motion.h1>{t("title")}</motion.h1>
          <Line className="line" />
          <motion.h4 variants={fromLeftToRight} initial="hidden" animate="show">
            {t("header")}
          </motion.h4>
        </HeadingText>

        <Heading variants={fadeInWithStagger} initial="hidden" animate="show">
          {headingData.map(({ svg, id }: HeadingAndButtonsData, index) => (
            <SingleHeading
              svg={svg}
              name={t(`headings.${index}.name`)}
              description={t(`headings.${index}.description`)}
              key={id}
            />
          ))}
        </Heading>

        <motion.h1 variants={fromRightToLeft} initial="hidden" animate="show">
          {t("skillsHeader")}
        </motion.h1>
        <ButtonsWrapper>
          {skillsData.map(({ svg, id }: HeadingAndButtonsData, index) => (
            <InfoButton
              svg={svg}
              name={t(`skills.${index}.name`)}
              description={t(`skills.${index}.description`)}
              key={id}
            />
          ))}
        </ButtonsWrapper>
      </Wrapper>
    </>
  )
}

export default InfoPage
