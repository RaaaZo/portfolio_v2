import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import { logoVariants } from "../utils/animations/variants"
// @ts-expect-error
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = () => {
  return (
    <Wrapper>
      <LogoWrapper variants={logoVariants} initial="hidden" animate="visible">
        <AniLink fade to="/">
          Mateusz
        </AniLink>
      </LogoWrapper>

      <NavList>
        <li>
          <AniLink fade to="/about">
            O mnie
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/info">
            Informacje
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/projects">
            Projekty
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/contact">
            Kontakt
          </AniLink>
        </li>
      </NavList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 15vh;
  height: 150px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem 1rem;
  background-color: var(--navigation-background);

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 125px;
    padding: 1rem 2rem;
  }
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li {
    margin: 0 1rem;
    @media (min-width: 768px) {
      margin: 0 3rem;
    }
    @media (min-width: 1024px) {
      margin: 0 2.5rem;
    }
    @media (min-width: 1360px) {
      margin: 0 6rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  a {
    color: var(--white);
    padding: 1rem 0rem;
    font-size: 1.6rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--green);
    }

    &[aria-current="page"] {
      color: var(--green);
    }

    @media (min-width: 1024px) {
      font-size: 2.2rem;
    }
  }
`

const LogoWrapper = styled(motion.div)`
  text-align: center;

  a {
    font-family: "Dancing Script", sans-serif;
    color: var(--white);
    text-decoration: none;
    font-size: 4.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--green);
    }

    &[aria-current="page"] {
      color: var(--green);
    }

    @media (min-width: 1024px) {
      margin: 0 4rem;
    }

    @media (min-width: 1360px) {
      margin: 0 8rem;
    }
  }
`

export default Navigation
