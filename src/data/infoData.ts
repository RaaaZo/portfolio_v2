import { IconType } from "react-icons/lib"
import uniqid from "uniqid"
// @ts-expect-error
import Beautiful from "../assets/images/beautiful.svg"
// @ts-expect-error
import Fast from "../assets/images/fast.svg"
// @ts-expect-error
import Responsive from "../assets/images/responsive.svg"
// @ts-expect-error
import Seo from "../assets/images/seo.svg"

import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaCss3,
  FaNodeJs,
  FaNpm,
  FaGitAlt,
  FaSass,
  FaPhp,
  FaWordpress,
} from "react-icons/fa"
import {
  SiGatsby,
  SiMongodb,
  SiRedux,
  SiJest,
  SiTypescript,
  SiMaterialUi,
  SiGraphql,
  SiNextDotJs,
} from "react-icons/si"

interface Data {
  id: string
  svg: IconType
  description?: string
}

export const headingData: Data[] = [
  {
    id: uniqid(),
    svg: Beautiful,
  },
  {
    id: uniqid(),
    svg: Fast,
  },
  {
    id: uniqid(),
    svg: Seo,
  },
  {
    id: uniqid(),
    svg: Responsive,
  },
]

export const upcomingSkillsData: Data[] = [
  {
    id: uniqid(),
    svg: SiNextDotJs,
  },
  {
    id: uniqid(),
    svg: FaPhp,
  },
  {
    id: uniqid(),
    svg: FaWordpress,
  },
]

export const skillsData: Data[] = [
  {
    id: uniqid(),
    svg: FaHtml5,
  },
  {
    id: uniqid(),
    svg: FaCss3,
  },
  {
    id: uniqid(),
    svg: FaJsSquare,
  },
  {
    id: uniqid(),
    svg: SiTypescript,
  },
  {
    id: uniqid(),
    svg: FaReact,
  },
  {
    id: uniqid(),
    svg: SiGatsby,
  },
  {
    id: uniqid(),
    svg: FaNodeJs,
  },
  {
    id: uniqid(),
    svg: SiMongodb,
  },
  {
    id: uniqid(),
    svg: SiGraphql,
  },
  {
    id: uniqid(),
    svg: SiMaterialUi,
  },
  {
    id: uniqid(),
    svg: FaNpm,
  },
  {
    id: uniqid(),
    svg: FaGitAlt,
  },
  {
    id: uniqid(),
    svg: FaSass,
  },
  {
    id: uniqid(),
    svg: SiRedux,
  },
  {
    id: uniqid(),
    svg: SiJest,
  },
]
