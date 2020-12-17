import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import { FaHtml5 } from "react-icons/fa"
import { fadeIn, modalFadeIn } from "../utils/animations/variants"

const InfoButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const handleModal = (): void => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <Modal
        variants={modalFadeIn}
        initial="hidden"
        animate={modalIsOpen ? "show" : "hidden"}
      >
        <ModalContent>
          <h2>HTML</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates perferendis alias ipsam? Autem accusantium dolore ratione
            dolorem voluptatibus consectetur maiores laudantium qui eos
            aspernatur quos fugiat nesciunt, earum inventore.
          </p>
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
          <FaHtml5 className="react-icon" />
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
  height: 60vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--navigation-background);
  border: 3px solid var(--green);
  color: var(--white);
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    gap: 6rem;
  }

  h2 {
    font-size: 5rem;
  }
  p {
    text-align: justify;
    text-align-last: center;
  }
  button {
    border: 2px solid var(--white);
    color: 2px solid var(--green);
    background-color: transparent;
    padding: 1rem 4rem;
    margin-top: 3rem;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-top: 5rem;
    }
  }
`

export default InfoButton
