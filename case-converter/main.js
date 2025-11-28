myResult = document.querySelector('.result');

document.querySelector('.camel').addEventListener('click', function () {
  myInput = document.querySelector('#my-input').value;
  myResult.value = camelCase(myInput);
});
document.querySelector('.snake').addEventListener('click', function () {
  myResult.value = snakeCase(myInput);
});
document.querySelector('.pascal').addEventListener('click', function () {
  myResult.value = pascalCase(myInput);
});
document.querySelector('.kebab').addEventListener('click', function () {
  myResult.value = kebabCase(myInput);
});
document.querySelector('.sentence').addEventListener('click', function () {
  myResult.value = sentenceCase(myInput);
});
document.querySelector('.title').addEventListener('click', function () {
  myResult.value = titleCase(myInput);
});
document.querySelector('.clear').addEventListener('click', function () {
  myResult.value = '';
});

// Title Case

function titleCase(myInput) {
  let NewMyInput = [];
  for (let word of myInput.split(' ')) {
    word = word[0].toUpperCase() + word.slice(1, myInput.length);
    NewMyInput += `${word} `;
  }
  return NewMyInput;
}

// Sentence case

function sentenceCase(myInput) {
  let NewMyInput = myInput[0].toUpperCase() + myInput.slice(1, myInput.length);
  return NewMyInput;
}

// snake_case

function snakeCase(myInput) {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('_');
  return NewMyInput;
}

// camelCase

function camelCase(myInput) {
  let myInputArr = titleCase(myInput).split(' ');
  myInputArr[0] = myInputArr[0].toLowerCase();
  return myInputArr.join('');
}

// PascalCase

function pascalCase(myInput) {
  let myInputArr = titleCase(myInput).split(' ');
  return myInputArr.join('');
}

// kebab-case

function kebabCase(myInput) {
  let myInputArr = myInput.split(' ');
  let NewMyInput = myInputArr.join('-');

  return NewMyInput;
}
