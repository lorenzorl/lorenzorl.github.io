export default class Circle {

  _cx: number;
  _cy: number;
  _fill: string;
  _radio: number;
  _colors: string[];
  _element: Element;
  _animate: Element;

  constructor(cx: number, cy: number, radio: number, fill: string, parentElement: SVGElement, colors: string[]) {
    this._cx = cx;
    this._cy = cy;
    this._fill = fill;
    this._radio = radio;
    this._colors = colors;

    const SVG_NS: string = "http://www.w3.org/2000/svg";

    this._element = document.createElementNS(SVG_NS, "circle");

    this._element.setAttributeNS(null, "cx", this._cx.toString());
    this._element.setAttributeNS(null, "cy", this._cy.toString());
    this._element.setAttributeNS(null, "r", this._radio.toString());
    this._element.setAttributeNS(null, "fill", this._fill);

    this._animate = document.createElementNS(SVG_NS, "animate");

    this._animate.setAttributeNS(null, "attributeName", "fill");
    this._animate.setAttributeNS(null, "attributeType", "CSS");
    const colorsForAnimation: string = this.getColorsForAnimation();
    this._animate.setAttributeNS(null, "values", colorsForAnimation);
    this._animate.setAttributeNS(null, "dur", (this._colors.length * 10) + "s");
    this._animate.setAttributeNS(null, "repeatCount", "indefinite");

    this._element.appendChild(this._animate);

    parentElement.appendChild(this._element);
  }

  get cx() {
    return this._cx;
  }
  set cx(cx) {
    this._cx = cx;
    this._element.setAttributeNS(null, "cx", this._cx.toString());
  }
  get cy() {
    return this._cy;
  }
  set cy(cy) {
    this._cy = cy;
    this._element.setAttributeNS(null, "cy", this._cy.toString());
  }
  get radio() {
    return this._radio;
  }
  set radio(radio) {
    this._radio = radio;
    this._element.setAttributeNS(null, "r", this._radio.toString());
  }
  get fill() {
    return this._fill;
  }
  set fill(fill) {
    this._fill = fill;
    this._element.setAttributeNS(null, "fill", this._fill);
  }
  getColorsForAnimation(): string {
    const colors = this._colors;
    let value = this._fill + ';';
    if (colors.indexOf(this._fill) === -1) return '';
    let k = colors.indexOf(this._fill) + 1;
    for (let i = 0; i < colors.length - 1; i++, k++) {
      if (k >= colors.length) k = 0;
      value += colors[k] + ';';
    }
    value += this._fill + ';';
    return value;
  }
}