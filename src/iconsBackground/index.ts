interface SVGCustomElement extends SVGSVGElement {
  isAnimating: boolean
}

export default () => {
  const hero = document.getElementById('icons')
  if (hero == undefined) return;
  const svgs = Array.from(hero?.querySelectorAll('svg') as NodeListOf<SVGCustomElement>)

  const w = window.innerWidth - 100
  const h = window.innerHeight - 100

  function animateBackgroundIcons () {
    const availableSvgs = svgs.filter((svg) => !svg.isAnimating)
    const svgToAnimate = availableSvgs[Math.floor(Math.random() * availableSvgs.length)]
    if (!svgToAnimate) return

    svgToAnimate.addEventListener(
      'animationend',
      () => {
        svgToAnimate.classList.remove('animate-moving-background')
        svgToAnimate.removeAttribute('style')
        svgToAnimate.isAnimating = false
      },
      { once: true }
    )

    const left = Math.floor(Math.random() * w)

    svgToAnimate.setAttribute(
      'style',
      `top: ${Math.floor(Math.random() * h)}px;
      left: ${left}px;`
    )

    svgToAnimate.classList.add('animate-moving-background')
    svgToAnimate.isAnimating = true
  }

  setInterval(animateBackgroundIcons, 1000)
  animateBackgroundIcons()
}