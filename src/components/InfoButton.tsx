import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { FaHtml5 } from "react-icons/fa"
import { modalFadeIn } from "../utils/animations/variants"
import { IconType } from "react-icons/lib"

interface Props {
  data: {
    svg: IconType
    name: string
    description: string
  }
}

const InfoButton: React.FC<Props> = ({ data: { description, name, svg } }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const handleModal = (): void => {
    setIsOpen(prevState => !prevState)
  }

  const Icon = svg

  return (
    <>
      <Modal
        variants={modalFadeIn}
        initial="hidden"
        animate={modalIsOpen ? "show" : "hidden"}
      >
        <ModalContent>
          <h2>{name}</h2>
          <p>{description}</p>
          <button onClick={handleModal}>Zamknij</button>
        </ModalContent>
      </Modal>

      <div>
        <Button
          whileHover={{
            scale: 1.1,
            color: "var(--green)",
            borderColor: "var(--green)",
          }}
          whileTap={{
            scale: 0.8,
            color: "var(--pink)",
            borderColor: "var(--pink)",
          }}
          transition={{
            ease: "easeIn",
          }}
          onClick={handleModal}
        >
          <Icon className="react-icon" />
        </Button>
      </div>
    </>
  )
}

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10;
`

const Button = styled(motion.button)`
  width: 150px;
  padding: 0.5rem 3rem;
  background-color: var(--pages-background);
  border: 2px solid var(--navigation-background);
  border-radius: 2.5rem;
  color: var(--navigation-background);
  outline: none;
  cursor: pointer;

  .react-icon {
    width: 100%;
    height: 40px;
  }
`

const ModalContent = styled(motion.div)`
  position: absolute;
  width: 90%;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--navigation-background);
  border: 3px solid var(--green);
  color: var(--white);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  h2 {
    font-size: 5rem;
  }
  p {
    font-size: 1.6rem;
    text-align: justify;
    text-align-last: center;
    line-height: 2.2rem;
  }
  button {
    border: 3px solid var(--white);
    color: var(--green);
    font-weight: 700;
    background-color: transparent;
    padding: 1rem 4rem;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border-color: var(--green);
      color: var(--white);
    }
  }

  @media (orientation: landscape) and (max-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    gap: 3rem;

    p {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 2.1rem;
    }
  }
`

export default InfoButton
