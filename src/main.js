import experience from './js/functions/experience';
import toggleNavigation from './js/functions/navigation';
import pageLoad from './js/functions/pageLoad';
import renderProjects from './js/functions/renderProjects';
import scrollTo from './js/functions/scrollTo';
import svgAnimation from './js/functions/svgAnimation';
import animationTrigger from './js/functions/animationTrigger';
import './scss/style.scss';

const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleNavigation);

pageLoad();
scrollTo();
svgAnimation();
renderProjects();
animationTrigger();
experience('experience', [['2020/2/18']]);
