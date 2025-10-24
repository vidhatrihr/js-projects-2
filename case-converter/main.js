myInput = document.querySelector('#my-input').value;
// myInput = myInput.toLowerCase();

// snake_case

function snakeCase() {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('_');

  document.querySelector('.result').value = NewMyInput;
}

// camelCase

function camelCase() {
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
  let NewMyInput = '';
  let myInputArr = myInput.split(' ');
  myInputArr.forEach(word => {
    NewMyInput += word[0].toUpperCase() + word.slice(1, word.length);
  });

  document.querySelector('.result').value = NewMyInput;
}

// kebab-case

function kebabCase() {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('-');

  document.querySelector('.result').value = NewMyInput;
}

// Sentence case

function sentenceCase() {
  let NewMyInput = myInput[0].toUpperCase() + myInput.slice(1, myInput.length);
  document.querySelector('.result').value = NewMyInput;
}

// Title Case

function titleCase() {
  let NewMyInput = [];
  for (let word of myInput.split(' ')) {
    word = word[0].toUpperCase() + word.slice(1, myInput.length);
    NewMyInput += `${word} `;
  }
  document.querySelector('.result').value = NewMyInput;
}

function clearInput() {
  document.querySelector('.result').value = '';
}
