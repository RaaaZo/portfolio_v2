import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://github.com/">by RaaaZo with ❤</a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--navigation-background);
  a {
    color: var(--white);
    font-size: 1.6rem;
    transition: color 0.5s ease;
    &:hover {
      color: var(--pink);
    }
  }

  @media (min-width: 768px) {
    height: 3vh;
  }
`

export default Footer
