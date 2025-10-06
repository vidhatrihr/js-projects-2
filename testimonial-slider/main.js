let testimonials = [];

let nameEl = document.querySelector('.name');
let profileEl = document.querySelector('.profile');
let textEl = document.querySelector('.text');

let prevIdx = 0;
function changeTestimonial(idx) {
  nameEl.innerText = testimonials[idx].name;
  profileEl.src = testimonials[idx].url;
  textEl.innerText = testimonials[idx].testimonial;

  document.querySelector(`.btn-${prevIdx}`).classList.remove('active');
  document.querySelector(`.btn-${idx}`).classList.add('active');
  prevIdx = idx;
}

function generateButtons() {
  testimonials.forEach((elem, idx) => {
    let activeClass = idx == prevIdx ? 'active' : '';
    let html = `
          <button class="btn-${idx} ${activeClass}" onclick="changeTestimonial(${idx})"></button>    
    `;

    document.querySelector('.controls').innerHTML += html;
  });
}

// fetch('https://gist.githubusercontent.com/k26rahul/faaa120cf8f254232ca7baf69920f57b/raw')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

async function getData() {
  let response = await fetch(
    'https://gist.githubusercontent.com/k26rahul/faaa120cf8f254232ca7baf69920f57b/raw'
  );
  testimonials = await response.json();

  generateButtons();
  changeTestimonial(0);
  document.querySelector('.container').style.visibility = 'visible';
}

getData();
