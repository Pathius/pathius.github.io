export default function () {
  const burgerElements = Array.from(
    document.querySelectorAll('.burger__element')
  );
  for (let element of burgerElements) {
    if (element.classList.contains('burger__element-active')) {
      element.classList.remove('burger__element-active');
    } else {
      element.classList.add('burger__element-active');
    }
  }
  const navigation = document.querySelector('.navigation');
  if (navigation.classList.contains('navigation-active')) {
    navigation.classList.remove('navigation-active');
  } else {
    navigation.classList.add('navigation-active');
  }
}
