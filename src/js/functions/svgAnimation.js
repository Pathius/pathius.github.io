export default function (id) {
  let paths = Array.from(document.querySelectorAll(`#${id} path`));
  for (let [index, path] of paths.entries()) {
    let length = Math.ceil(path.getTotalLength());
    let delay = (0.25 * index).toFixed(1);
    path.setAttribute(
      'style',
      `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation-delay: ${delay}s; fill: transparent;`
    );
    path.classList.add('active');
  }
}
