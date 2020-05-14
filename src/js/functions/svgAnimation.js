export default function () {
  let paths = Array.from(document.querySelectorAll('.pizzaapp-svg path'));
  for (let [index, path] of paths.entries()) {
    let length = Math.ceil(path.getTotalLength());
    let delay = (0.3 * index).toFixed(1);
    path.setAttribute(
      'style',
      `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation-delay: ${delay}s; fill: transparent;`
    );
    path.classList.add('svgAnimate');
  }
}
