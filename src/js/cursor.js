export default function () {
  const cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', (event) => {
    cursor.setAttribute(
      'style',
      `top: ${event.pageY - 8}px; left: ${event.pageX - 8}px`
    );
  });
}
