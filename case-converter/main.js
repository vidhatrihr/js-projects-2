myInput = document.querySelector('#my-input').value;
// myInput = myInput.toLowerCase();

// snake_case

function snakeCase() {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('_');

  console.log(NewMyInput);
}

snakeCase();

// camelCase

function camelCase() {
  let NewMyInput = '';
  let myInputArr = myInput.split(' ');

  myInputArr.forEach(word => {
    NewMyInput += word[0].toUpperCase() + word.slice(1, word.length);
    NewMyInput = NewMyInput[0].toLowerCase() + NewMyInput.slice(1, NewMyInput.length);
  });
  console.log(NewMyInput);
}

camelCase();

// PascalCase

function pascalCase() {
  let NewMyInput = '';
  let myInputArr = myInput.split(' ');
  myInputArr.forEach(word => {
    NewMyInput += word[0].toUpperCase() + word.slice(1, word.length);
  });

  console.log(NewMyInput);
}

pascalCase();

// kebab-case

function kebabCase() {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('-');

  console.log(NewMyInput);
}

kebabCase();

// Sentence case

function sentenceCase() {
  let NewMyInput = myInput[0].toUpperCase() + myInput.slice(1, myInput.length);
  console.log(NewMyInput);
}

sentenceCase();
