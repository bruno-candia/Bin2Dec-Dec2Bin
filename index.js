let typeConverter = 'decimal'

const binaryInput = document.querySelector('#binary');
binaryInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-1]/g, '')
  e.target.value.trim();
})

const decimalInput = document.querySelector('#decimal');
decimalInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')
  e.target.value.trim();
})

function decimalToBinaryConverter(decimalValue) {
  let binaryValue = '' + (decimalValue % 2);
  return decimalValue === 0 ? 0 : binaryValue.concat(decimalToBinaryConverter(Math.floor(decimalValue / 2)))
}

function binaryToDecimalConverter(binaryValue) {
  let decimalValue = 0;
  for (let i = 0; i < binaryValue.length; i++) {
    decimalValue = decimalValue * 2 + parseInt(binaryValue[i])
  }
  return decimalValue
}

const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (inputList.firstChild.parentElement.children[0].children[1].id === 'decimal') {
    result = decimalToBinaryConverter(decimalInput.value)
    binaryInput.value = result.split("").reverse().join("").substring(1, result.length)
  } else {
    result = binaryToDecimalConverter(binaryInput.value.split(''))
    decimalInput.value = result
  }
})

const inputList = document.querySelector('fieldset')
const inputs = document.querySelector('.input');
const binaryToDecimalButton = document.querySelector('#binary-to-decimal');

binaryToDecimalButton.addEventListener('click', () => {
  inputList.firstChild.parentElement.children[0].children[1].id === 'decimal' && inputList.appendChild(inputList.firstElementChild);
  decimalInput.setAttribute('disabled', '');
  binaryInput.removeAttribute('disabled');

  binaryToDecimalButton.setAttribute('class', 'active');
  decimalToBinaryButton.removeAttribute('class');

  binaryInput.placeholder = 'Enter with 0 or 1';
  decimalInput.placeholder = 'Result'
})

const decimalToBinaryButton = document.querySelector('#decimal-to-binary');
decimalToBinaryButton.addEventListener('click', () => {
  inputList.firstChild.parentElement.children[0].children[1].id === 'binary' && inputList.appendChild(inputList.firstElementChild);
  binaryInput.setAttribute('disabled', '')
  decimalInput.removeAttribute('disabled');

  decimalToBinaryButton.setAttribute('class', 'active');
  binaryToDecimalButton.removeAttribute('class');

  decimalInput.placeholder = 'Enter with a number';
  binaryInput.placeholder = 'Result'
})

