import experience from './js/experience';
import toggleNavigation from './js/navigation';
import './scss/style.scss';

experience('experience', [['2020, 1, 18']]);

const burger = document.querySelector('.burger');

burger.addEventListener('click', toggleNavigation);
