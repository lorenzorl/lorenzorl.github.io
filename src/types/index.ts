export interface Project {
  name: string,
  slug: string,
  description: string,
  img: string,
  link: string,
  technologies: string[],
  images?: string[]
}

export interface Skill {
  name: string,
  percent: number
}

export interface Images {
  [property: string] : string[]
}

export interface Point {
  x: number,
  y: number
}