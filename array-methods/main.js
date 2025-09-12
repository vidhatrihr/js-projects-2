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

function clearConsole() {
  console.clear();
}

function forEach() {
  fruits.forEach(fruit => {
    console.log(fruit);
  });
}

function filter() {
  fruits.filter(fruit => {
    if (fruit[0] == 'p') {
      console.log(fruit);
    }
  });
}

function map() {
  console.log(
    fruits.map(fruit => {
      return `${fruit}✼`;
    })
  );
}

function reduce() {
  console.log(
    numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    })
  );
}

function indexOf() {
  console.log(fruits.indexOf('kiwi'));
}

function includes() {
  console.log(fruits.includes('mango'));
}

function sort() {
  console.log(numbers.sort((a, b) => b - a));
}

function join() {
  console.log(numbers.join('✼'));
}

function push() {
  numbers.push(100);
  console.log(numbers);
}

function pop() {
  numbers.pop();
  console.log(numbers);
}

function shift() {
  let newFruitsArray = fruits.shift();
  console.log('newFruitsArray = ', newFruitsArray, ' fruits = ', fruits);
}

function unshift() {
  let newLength = fruits.unshift('tomato');
  console.log('length of fruits array = ', newLength, ', tomato added in the beginning: ', fruits);
}

function reverse() {
  console.log(numbers.reverse());
}
