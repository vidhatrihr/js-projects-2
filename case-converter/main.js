// snake_case

function snakeCase() {
  myInput = document.querySelector('#my-input').value;
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('_');

  document.querySelector('.result').value = NewMyInput;
}

// camelCase

function camelCase() {
  myInput = document.querySelector('#my-input').value;
  let NewMyInput = '';
  let myInputArr = myInput.split(' ');

  myInputArr.forEach(word => {
    NewMyInput += word[0].toUpperCase() + word.slice(1, word.length);
    NewMyInput = NewMyInput[0].toLowerCase() + NewMyInput.slice(1, NewMyInput.length);
  });
  document.querySelector('.result').value = NewMyInput;
}

// PascalCase

function pascalCase() {
  myInput = document.querySelector('#my-input').value;
  let NewMyInput = '';
  let myInputArr = myInput.split(' ');
  myInputArr.forEach(word => {
    NewMyInput += word[0].toUpperCase() + word.slice(1, word.length);
  });

  document.querySelector('.result').value = NewMyInput;
}

// kebab-case

function kebabCase() {
  myInput = document.querySelector('#my-input').value;
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('-');

  document.querySelector('.result').value = NewMyInput;
}

// Sentence case

function sentenceCase() {
  myInput = document.querySelector('#my-input').value;
  let NewMyInput = myInput[0].toUpperCase() + myInput.slice(1, myInput.length);
  document.querySelector('.result').value = NewMyInput;
}

// Title Case

function titleCase() {
  myInput = document.querySelector('#my-input').value;
  let NewMyInput = [];
  for (let word of myInput.split(' ')) {
    word = word[0].toUpperCase() + word.slice(1, myInput.length);
    NewMyInput += `${word} `;
  }
  document.querySelector('.result').value = NewMyInput;
}

function clearInput() {
  myInput = document.querySelector('#my-input').value;
  document.querySelector('.result').value = '';
}
