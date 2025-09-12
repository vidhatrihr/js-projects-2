let fruits = [
  'apple',
  'banana',
  'mango',
  'grapes',
  'orange',
  'watermelon',
  'pineapple',
  'strawberry',
  'kiwi',
  'papaya',
  'cherry',
  'peach',
  'pear',
  'plum',
  'Fig',
];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.querySelector('#fruits').innerText = `fruits = [${fruits.join(', ')}]`;
document.querySelector('#numbers').innerText = `numbers = [${numbers.join(', ')}]`;

function display(token, text) {
  document.querySelector(`#${token}-result`).innerText = text;
}

function clearConsole() {
  console.clear();
}

function forEach() {
  let text = '';
  fruits.forEach(fruit => {
    text += `${fruit}, `;
  });
  display('forEach', text);
}

function filter() {
  let text = '';
  fruits.filter(fruit => {
    if (fruit[0] == 'p') {
      text += `${fruit}, `;
    }
    display('filter', text);
  });
}

function map() {
  let newFruitsArray = fruits.map(fruit => {
    return `${fruit}✼`;
  });
  let text = newFruitsArray.join(', ');
  display('map', text);
}

function reduce() {
  display(
    'reduce',
    numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    })
  );
}

function indexOf() {
  display('indexOf', fruits.indexOf('kiwi'));
}

function includes() {
  display('includes', fruits.includes('mango'));
}

function sort() {
  display('sort', numbers.sort((a, b) => b - a).join(', '));
}

function join() {
  display('join', numbers.join('✼'));
}

function push() {
  display(
    'push',
    `new length of numbers array after pushing 100 is ${numbers.push(
      100
    )} and array is ${numbers.join(', ')}`
  );
}

function pop() {
  display('pop', `removed elem (from last) = ${numbers.pop()}, numbers = ${numbers.join(', ')}`);
}

function shift() {
  display(
    'shift',
    `removed elem (from first) = ${numbers.shift()}, numbers = ${numbers.join(', ')}`
  );
}

function unshift() {
  display(
    'unshift',
    `new length of the numbers = ${numbers.unshift(100)}, numbers = ${numbers.join(', ')}`
  );
}

function reverse() {
  display('reverse', numbers.reverse().join(', '));
}
