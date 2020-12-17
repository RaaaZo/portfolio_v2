import React from "react"
import { motion } from "framer-motion"

import styled from "styled-components"
import ProjectContent from "../assets/styles/ProjectContent"

const ProjectsPage = () => {
  return (
    <Wrapper>
      <ProjectContent />
      <ProjectContent />
      <ProjectContent />
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  min-height: 80vh;
  padding: 1rem 5rem;
  background-color: var(--pages-background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default ProjectsPage
