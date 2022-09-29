export interface Project {
  name: string,
  description: string,
  img: string,
  link: string,
  imageSrc?: string
}

export interface Skill {
  name: string,
  percent: number
}

export interface Images {
  [property: string] : string
}

export interface Point {
  x: number,
  y: number
}