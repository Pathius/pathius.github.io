export default function () {
  const elements = Array.from(document.querySelectorAll('.animation'));
  const observer = new IntersectionObserver(
    (entries) => {
      for (let entry of entries) {
        if (entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('active');
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
