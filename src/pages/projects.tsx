import React from "react"
import { motion } from "framer-motion"

import styled from "styled-components"
import ProjectContent from "../components/ProjectContent"
import { projectData } from "../data/projectsData"
import { graphql, PageProps } from "gatsby"
import { Fluid } from "../utils/types/DataPropsImage"
import SEO from "../components/SEO"

interface DataProps {
  allImageSharp: {
    nodes: {
      fluid: Fluid
    }[]
  }
}

const ProjectsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const gatsbyImages = data.allImageSharp.nodes

  return (
    <>
      <SEO />
      <Wrapper>
        {projectData.map(item => {
          const fluid = gatsbyImages.find(({ fluid }) =>
            fluid.src.includes(item.title)
          )

          return <ProjectContent key={item.id} data={item} image={fluid} />
        })}
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid(maxWidth: 1200, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled(motion.div)`
  min-height: 82vh;
  padding: 5rem 2rem;
  background-color: var(--pages-background);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default ProjectsPage
