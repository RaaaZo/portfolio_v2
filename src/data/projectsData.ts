import uniqid from "uniqid"

interface Data {
  id: string
  githubUrl: string
  liveUrl: string
  title: string
}

export const projectData: Data[] = [
  {
    id: uniqid(),
    githubUrl: "https://github.com/RaaaZo/restaurant",
    liveUrl: "https://profoodapp.web.app/",
    title: "ProFood",
  },
  {
    id: uniqid(),
    githubUrl: "https://github.com/RaaaZo/e-shop",
    liveUrl: "https://e-shop-730ae.web.app/",
    title: "E-shop",
  },
  {
    id: uniqid(),
    githubUrl: "https://github.com/RaaaZo/bestdrinks",
    liveUrl: "https://best-drinks-295be.web.app/",
    title: "BestDrinks",
  },
  {
    id: uniqid(),
    githubUrl: "https://github.com/RaaaZo/pokemons",
    liveUrl: "https://raaazo.github.io/pokemons/",
    title: "PokeDex",
  },
  {
    id: uniqid(),
    githubUrl: "https://github.com/RaaaZo/CountryInfo",
    liveUrl: "https://country-info-551b0.web.app/",
    title: "CountryInfo",
  },
]
