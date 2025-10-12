const html = String.raw;

const data = [
  {
    title: 'Testimonial Slider',
    description: 'Changing testimonial slides.',
    date: '2025-10-06',
    tags: ['html', 'css', 'timer'],
    slug: 'testimonial-slider',
  },
  {
    title: 'Temperature Converter',
    description: 'Convert temperature from three different SI units.',
    date: '2025-10-02',
    tags: ['html', 'css', 'logic'],
    slug: 'temperature-converter',
  },
  {
    title: 'Image Search App 2',
    description: 'Search any image.',
    date: '2025-09-28',
    tags: ['html', 'css', 'logic'],
    slug: 'image-search-app-2',
  },
  {
    title: 'Random Password Generator',
    description: 'Generate Random valid password.',
    date: '2025-09-27',
    tags: ['html', 'css', 'logic'],
    slug: 'random-password-generator',
  },
  {
    title: 'Image Search App',
    description: 'Search any image.',
    date: '2025-09-24',
    tags: ['html', 'css', 'js methods'],
    slug: 'image-search-app',
  },
  {
    title: 'Random Color Generator',
    description: 'Generate Random colors copy color code on clicking.',
    date: '2025-09-19',
    tags: ['html', 'css', 'logic'],
    slug: 'random-color-generator',
  },
  {
    title: 'Whatsapp Layout',
    description: 'Created whatsapp like layout.',
    date: '2025-09-13',
    tags: ['html', 'css'],
    slug: 'wa-layout',
  },
  {
    title: 'Array Methods',
    description: 'A demonstration of few built-in js methods.',
    date: '2025-09-12',
    tags: ['html', 'css', 'js methods'],
    slug: 'array-methods',
  },
  {
    title: 'Refer Flex',
    description: 'A complete demonstration of how display flex works.',
    date: '2025-09-11',
    tags: ['html', 'css', 'flex'],
    slug: 'refer-flex',
  },
  {
    title: 'CGPA Calculator 2',
    description: 'Calculate your overall CGPA.',
    date: '2025-09-08',
    tags: ['html', 'json', 'css'],
    slug: 'cgpa-calc-2',
  },
  {
    title: 'CGPA Calculator',
    description: 'Calculate your overall CGPA.',
    date: '2025-09-07',
    tags: ['html', 'css'],
    slug: 'cgpa-calc',
  },
  {
    title: 'Calculator',
    description: 'Experience typical calculator.',
    date: '2025-08-16',
    tags: ['html', 'css'],
    slug: 'calculator',
  },
  {
    title: 'Age Calculator',
    description: 'Enter date of birth, calculates you age.',
    date: '2025-08-16',
    tags: ['html', 'css'],
    slug: 'age-calc',
  },
];

data.forEach(info => {
  let { title, description, date, tags, slug } = info;

  date = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let projectTag = '';
  tags.forEach(tag => {
    projectTag += html`<span>${tag}</span>`;
  });

  let projectTemplate = html`
    <div class="project">
      <div class="screenshot">
        <img src="./screenshots/${slug}.png" alt="${title}" />
      </div>

      <h4 class="title">${title}</h4>
      <p class="description">${description}</p>
      <div class="date">
        <iconify-icon icon="guidance:calendar" style="color: #333"></iconify-icon>
        ${date}
      </div>
      <div class="tags">${projectTag}</div>

      <a href="https://vidhatrihr.github.io/js-projects-2/${slug}" target="_blank">
        Open Live Preview
        <iconify-icon icon="cuida:open-in-new-tab-outline"></iconify-icon>
      </a>
    </div>
  `;

  document.querySelector('.container').innerHTML += projectTemplate;
});
