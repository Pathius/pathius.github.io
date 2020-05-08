// Function created to prevent from certain animations
// before page loads and trigger them after

export default function () {
  window.addEventListener('load', function () {
    document.body.classList.remove('preload');
  });
}
