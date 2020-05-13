import experience from './js/functions/experience';
import toggleNavigation from './js/functions/navigation';
import pageLoad from './js/functions/pageLoad';
import renderProjects from './js/functions/renderProjects';

import './scss/style.scss';

experience('experience', [['2020, 1, 18']]);

const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleNavigation);

pageLoad();

renderProjects();
