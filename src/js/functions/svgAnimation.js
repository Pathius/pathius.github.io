// Function created for svg border animation, it takes the of an svg tag as an argument
// and trigger animation for all of its paths individually with delay

export default function (id) {
  // Assign paths to variable
  let paths = Array.from(document.querySelectorAll(`#${id} path`));

  // Loop through paths
  for (let [index, path] of paths.entries()) {
    let length = Math.ceil(path.getTotalLength());
    let delay = (0.25 * index).toFixed(1);

    // Set stroke-dasharray and stroke-dashoffset to be sure that element won't be visible
    path.setAttribute(
      'style',
      `stroke-dasharray: ${length}; stroke-dashoffset: ${length}; animation-delay: ${delay}s; fill: transparent;`
    );

    // Add a class that trigger animation
    path.classList.add('active');
  }
}
