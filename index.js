const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const division = document.getElementById('division');

function onClickAddButtonHandler() {
  const text = userInput.value;

  // Check if the input is not empty
  if (text) {
    const divItem = document.createElement('p');
    divItem.textContent = text;

    divItem.addEventListener('mouseover', function () {
      divItem.style.backgroundColor = 'lightgrey';
      divItem.style.fontWeight = 'bold';
      divItem.style.transition = '.5s'

    });

    divItem.addEventListener('mouseout', function () {
      divItem.style.backgroundColor = '';
      divItem.style.fontWeight = '';
    });

    division.appendChild(divItem);
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