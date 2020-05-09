// Function created to handle navigation/burger class changes

export default function () {
  // Change burger classes
  const burgerElements = Array.from(
    document.querySelectorAll('.burger__element')
  );

  if (burgerElements && burgerElements.length === 3) {
    for (let element of burgerElements) {
      element.classList.toggle('burger__element-active');
    }
  }

  // Change navigation classes
  const navigation = document.querySelector('.navigation');

  if (navigation && navigation.tagName === 'NAV') {
    navigation.classList.toggle('navigation-active');
  }
}
