// Function created to handle navigation/burger class changes

export default function () {
  // Change burger classes
  const burgerElements = Array.from(
    document.querySelectorAll('.burger__element')
  );

  if (burgerElements && burgerElements.length === 3) {
    for (let element of burgerElements) {
      if (element.classList.contains('burger__element-active')) {
        element.classList.remove('burger__element-active');
      } else {
        element.classList.add('burger__element-active');
      }
    }
  }

  // Change navigation classes
  const navigation = document.querySelector('.navigation');

  if (navigation && navigation.tagName === 'NAV') {
    if (navigation.classList.contains('navigation-active')) {
      navigation.classList.remove('navigation-active');
    } else {
      navigation.classList.add('navigation-active');
    }
  }
}
