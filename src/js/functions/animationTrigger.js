// Function adds 'active' class to an element whenever it's visible on a screen:
// To trigger it, you have to simply add class 'animation' to an element

import svgAnimation from './svgAnimation';

export default function () {
  // Declaring array with all elements that have a class 'animation'
  const elements = Array.from(document.querySelectorAll('.animation'));

  const observer = new IntersectionObserver(
    (entries) => {
      for (let entry of entries) {
        // This ratio is declaring how much of element has to be seen to add 'active' class
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');

          // If the element is project, we have to also call a svgAnimation function
          if (entry.target.classList.contains('project')) {
            svgAnimation(entry.target.id);
          }
        }
      }
    },
    {
      threshold: 0.5,
    }
  );

  for (let element of elements) {
    observer.observe(element);
  }
}
