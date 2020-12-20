import { motion } from "framer-motion"
import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
//@ts-expect-error
import Poland from "../assets/images/poland.svg"
// @ts-expect-error
import Gba from "../assets/images/united-kingdom.svg"

type Languages = "pl" | "en"

const LanguageComponent = () => {
  const { i18n } = useTranslation()

  const handleLanguage = (value: Languages) => {
    i18n.changeLanguage(value)
  }

  return (
    <Wrapper>
      <button onClick={() => handleLanguage("pl")}>
        <Poland />
      </button>
      <button onClick={() => handleLanguage("en")}>
        <Gba />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 160px;
  right: 1rem;
  z-index: 2;

  button {
    width: 50px;
    height: 100%;
    border: none;
    margin: 1rem;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    top: 170px;
  }
`

export default LanguageComponent
