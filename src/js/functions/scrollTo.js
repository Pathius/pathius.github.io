export default function (id, duration = 2000) {
  console.log(id);
  const element = document.getElementById(id);
  console.log(element);
  const { top: elementPosition } = element.getBoundingClientRect();
  const windowPosition = window.pageYOffset;
  const distance = elementPosition - windowPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, windowPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
  }

  requestAnimationFrame(animation);
}
