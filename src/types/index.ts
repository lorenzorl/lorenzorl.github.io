export interface Project {
  name: string,
  description: string,
  img: string,
  link: string,
  imageSrc?: string | URL
}

export interface Skill {
  name: string,
  percent: number
}

export interface Images {
  [property: string] : URL
}

export interface Point {
  x: number,
  y: number
}