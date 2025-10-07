const html = String.raw;

let testimonials = [];
let timeoutRef = null;

let nameEl = document.querySelector('.name');
let profileEl = document.querySelector('.profile');
let textEl = document.querySelector('.text');

let activeIdx = parseInt(new URLSearchParams(location.search).get('idx') ?? 0);
let timeoutDuration = parseFloat(new URLSearchParams(location.search).get('timeout') ?? 5) * 1000;

function changeTestimonial(idx) {
  console.log(`Change testimonial at ${new Date().getSeconds()}`);

  nameEl.innerText = testimonials[idx].name;
  profileEl.src = testimonials[idx].url;
  textEl.innerText = testimonials[idx].testimonial;

  document.querySelector(`.btn-${activeIdx}`).classList.remove('active');
  document.querySelector(`.btn-${idx}`).classList.add('active');

  activeIdx = idx;

  // trigger timeout that does changeTestimonial(idx + 1), after 2 sec
  clearTimeout(timeoutRef);

  timeoutRef = setTimeout(() => {
    changeTestimonial((idx + 1) % testimonials.length);
  }, timeoutDuration);
}

function generateButtons() {
  testimonials.forEach((elem, idx) => {
    let activeClass = idx == activeIdx ? 'active' : '';
    let buttonHtml = html`
      <button class="btn-${idx} ${activeClass}" onclick="changeTestimonial(${idx})"></button>
    `;

    document.querySelector('.controls').innerHTML += buttonHtml;
  });
}

async function getData() {
  let response = await fetch(
    'https://gist.githubusercontent.com/k26rahul/faaa120cf8f254232ca7baf69920f57b/raw'
  );
  testimonials = await response.json();

  generateButtons();
  changeTestimonial(activeIdx);

  document.querySelector('.container').style.visibility = 'visible';
}

getData();
