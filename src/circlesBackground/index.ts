import Circle from './circle'
import colors from './colors'
import { Point } from '../types';

export default function () {
  const svgElement = document.querySelector<SVGElement>("#circlesBackground");
  const circlesWrapper = svgElement?.querySelector("g");
  if (circlesWrapper == undefined) return;
  const svgRects = svgElement?.parentElement?.getBoundingClientRect();
  if (svgRects == undefined) return;
  const coordinates: Point[] = getCoordinates(svgRects);
  const circles: Circle[] = [];

  for (let i = 0; i < coordinates.length; i++) {
    const { x, y } = coordinates[i];
    const radio = random(100, 150);
    let circle = new Circle(x, y, radio, colors[i], circlesWrapper, colors);
    circles.push(circle);
  }

  window.addEventListener('resize', () => {
    const newSvgRects = svgElement?.parentElement?.getBoundingClientRect();
    if (newSvgRects == undefined) return;
    const newCoordinates = getCoordinates(newSvgRects);
    for (let i = 0; i < newCoordinates.length; i++) {
      const { x, y } = newCoordinates[i];
      circles[i].cx = x;
      circles[i].cy = y;
    }
  });

  function getCoordinates(rects: DOMRect): Point[] {
    const { width, height } = rects;

    const coordinates: Point[] = [];
    coordinates.push({
      x: width,
      y: 0
    });
    coordinates.push({
      x: 0,
      y: (height / 2)
    });
    coordinates.push({
      x: width,
      y: height
    });

    return coordinates;
  }
  function random(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
}