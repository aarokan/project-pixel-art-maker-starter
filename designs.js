// Select color input
const colorInput = document.getElementById('colorPicker');

// Select size input
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');
const submitButton = document.querySelector('form').lastElementChild;

// Select the canvas table
const canvasTable = document.querySelector('#pixelCanvas');

// Define listener function for the submitButton event listener
function respondToSubmit (event) {
  event.preventDefault();
  makeGrid();
}

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', respondToSubmit);

function makeGrid() {

// Define variables to store the selected color, height and width
  let colorValue = colorInput.value;
  let heightValue = heightInput.value;
  let widthValue = widthInput.value;

// Create the canvas
  for (let r = 1; r <= heightValue; r++) {
    const newTr = document.createElement('tr');
    canvasTable.appendChild(newTr);
  }

  let tableRows = document.querySelectorAll('tr');
  for (let row = 0; row < heightValue; row++) {
    for (let c = 1; c <= widthValue; c++) {
      const newTd = document.createElement('td');
      tableRows[row].appendChild(newTd);
    }
  }

}
