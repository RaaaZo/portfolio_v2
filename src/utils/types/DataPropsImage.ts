export interface DataPropsImage {
  file: {
    childImageSharp: {
      fluid: Fluid
    }
  }
}

export interface Fluid {
  aspectRatio: number
  base64: string
  sizes: string
  src: string
  srcSet: string
}
