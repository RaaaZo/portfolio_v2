import React from "react"
import styled from "styled-components"
// @ts-expect-error
import ErrorSvg from "../assets/images/error.svg"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <>
    <SEO />
    <Wrapper>
      <StyledError />
      <h1>Nie znaleziono takiej strony!</h1>
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  gap: 3rem;

  h1 {
    color: var(--white);
    font-size: 4rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    gap: 5rem;
    h1 {
      font-size: 5rem;
    }
  }
`

const StyledError = styled(ErrorSvg)`
  width: 100%;
  height: 50vh;
`

export default NotFoundPage
