const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const division = document.getElementById('division');

function createParagraphElement(text) {
  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = text;

  paragraphElement.addEventListener('mouseover', function () {
    paragraphElement.style.backgroundColor = 'lightgrey';
    paragraphElement.style.fontWeight = 'bold';
    paragraphElement.style.transition = '.5s'

  });

  paragraphElement.addEventListener('mouseout', function () {
    paragraphElement.style.backgroundColor = '';
    paragraphElement.style.fontWeight = '';
  });

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