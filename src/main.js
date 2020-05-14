import experience from './js/functions/experience';
import toggleNavigation from './js/functions/navigation';
import pageLoad from './js/functions/pageLoad';
import renderProjects from './js/functions/renderProjects';
import scrollTo from './js/functions/scrollTo';
import svgAnimation from './js/functions/svgAnimation';

import './scss/style.scss';

experience('experience', [['2020, 1, 18']]);

const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleNavigation);

pageLoad();

renderProjects();

const navElements = Array.from(
  document.querySelectorAll('.navigation__site-item')
);

for (let element of navElements) {
  element.addEventListener('click', function () {
    scrollTo(element.id.split('-')[1], 2000);
  });
}

svgAnimation();
