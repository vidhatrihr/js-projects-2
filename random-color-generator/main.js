const colors = new Map([
  ['Crimson', '#DC143C'],
  ['FireBrick', '#B22222'],
  ['DarkRed', '#8B0000'],
  ['IndianRed', '#CD5C5C'],
  ['DarkOrange', '#FF8C00'],
  ['Chocolate', '#D2691E'],
  ['SaddleBrown', '#8B4513'],
  ['Peru', '#CD853F'],
  ['DarkGoldenRod', '#B8860B'],
  ['GoldenRod', '#DAA520'],
  ['DarkKhaki', '#BDB76B'],
  ['SeaGreen', '#2E8B57'],
  ['ForestGreen', '#228B22'],
  ['DarkGreen', '#006400'],
  ['MediumAquaMarine', '#66CDAA'],
  ['DarkCyan', '#008B8B'],
  ['SteelBlue', '#4682B4'],
  ['RoyalBlue', '#4169E1'],
  ['MidnightBlue', '#191970'],
  ['DodgerBlue', '#1E90FF'],
  ['CornflowerBlue', '#6495ED'],
  ['SlateBlue', '#6A5ACD'],
  ['DarkSlateBlue', '#483D8B'],
  ['Indigo', '#4B0082'],
  ['RebeccaPurple', '#663399'],
  ['MediumVioletRed', '#C71585'],
  ['DarkMagenta', '#8B008B'],
  ['DarkOrchid', '#9932CC'],
  ['DarkViolet', '#9400D3'],
  ['MediumPurple', '#9370DB'],
  ['Orchid', '#DA70D6'],
  ['DarkSalmon', '#E9967A'],
  ['RosyBrown', '#BC8F8F'],
  ['Sienna', '#A0522D'],
  ['DimGray', '#696969'],
  ['DarkSlateGray', '#2F4F4F'],
  ['SlateGray', '#708090'],
  ['LightSlateGray', '#778899'],
  ['CadetBlue', '#5F9EA0'],
  ['Maroon', '#800000'],
  ['Olive', '#808000'],
  ['Navy', '#000080'],
  ['Teal', '#008080'],
  ['Brown', '#A52A2A'],
  ['DarkOliveGreen', '#556B2F'],
  ['DarkSeaGreen', '#8FBC8F'],
  ['MediumSeaGreen', '#3CB371'],
  ['MediumSlateBlue', '#7B68EE'],
]);

let container = document.querySelector('.container');

for (i = 0; i <= 20; i++) {
  const box = document.createElement('button');
  box.classList.add('box');

  const keys = Array.from(colors.keys());
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  box.style.backgroundColor = randomKey.toString();
  box.innerText = randomKey.toString();

  let colorName = box.innerText;
  box.addEventListener('click', function () {
    copyContent(colorName);
  });

  container.appendChild(box);
}

function copyContent(colorName) {
  const textToCopy = colors.get(colorName);
  navigator.clipboard.writeText(textToCopy);
  alert('Text copied to clipboard');
}
