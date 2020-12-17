import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://github.com/">RaaaZo &copy;</a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 3vh;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--navigation-background);
  a {
    color: var(--white);
    font-size: 1.6rem;
  }
`

export default Footer
