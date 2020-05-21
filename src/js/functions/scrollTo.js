// Function created to trigger scroll to an section after clicking on a nav item

import closeNavigation from './navigation';

export default function () {
  // Assign navigation elements
  const navElements = Array.from(
    document.querySelectorAll('.navigation__site-item')
  );

  // Add click listener do every individual item
  for (let element of navElements) {
    element.addEventListener('click', function () {
      scrollTo(element.id.split('-')[1], 2000);
    });
  }

  const scrollTo = function (id, duration = 2000) {
    // Assign variables
    const element = document.getElementById(id);
    const elementPosition = element.offsetTop;
    const windowPosition = window.pageYOffset;
    const distance = elementPosition - windowPosition;
    let startTime = null;

    // Create animation function
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        windowPosition,
        distance,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Create ease function to make the movement looks better
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    // Trigger animation function
    requestAnimationFrame(animation);

    // Trigger closeNavigation function (made for mobile version)
    closeNavigation();
  };
}
