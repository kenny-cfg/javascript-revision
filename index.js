const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const division = document.getElementById('division');

function addMouseFloatHandlersOnElement(element) {
  element.addEventListener('mouseover', function () {
    element.style.backgroundColor = 'lightgrey';
    element.style.fontWeight = 'bold';
    element.style.transition = '.5s'
  });

  element.addEventListener('mouseout', function () {
    element.style.backgroundColor = '';
    element.style.fontWeight = '';
  });
}

function createParagraphElement(text) {
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = text;
  addMouseFloatHandlersOnElement(paragraphElement);
  return paragraphElement
}

function onClickAddButtonHandler() {
  const text = userInput.value;

  if (text) {
    const paragraphElement = createParagraphElement(text);
    division.appendChild(paragraphElement);
    userInput.value = '';
  }
}

addButton.addEventListener('click', onClickAddButtonHandler);

removeButton.addEventListener('click', function () {
  const divItems = division.getElementsByTagName('p');

  if (divItems.length > 0) {
    division.removeChild(divItems[divItems.length - 1]);
  }
});