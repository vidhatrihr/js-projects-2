const html = String.raw;

const data = [
  {
    title: 'CGPA Calculator',
    description: 'Calculate your overall CGPA.',
    date: '2025-10-09',
    tags: ['html', 'json', 'css'],
    slug: 'cgpa-calc',
  },
  {
    title: 'CGPA Calculator',
    description: 'Calculate your overall CGPA.',
    date: '2025-10-09',
    tags: ['html', 'json', 'css'],
    slug: 'cgpa-calc',
  },
  {
    title: 'CGPA Calculator',
    description: 'Calculate your overall CGPA.',
    date: '2025-10-09',
    tags: ['html', 'json', 'css'],
    slug: 'cgpa-calc',
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
    <div class="project-box">
      <div class="image-box">
        <img src="./screenshots/converted-Screenshot 2025-10-10 123903 (1).jpeg" alt="${title}" />
      </div>
      <h4 class="title">${title}</h4>
      <p class="description">${description}</p>
      <div class="date">
        <iconify-icon icon="guidance:calendar" style="color: #333"></iconify-icon>
        ${date}
      </div>
      <div class="tags">${projectTag}</div>
      <div class="app-link">
        <a href="https://vidhatrihr.github.io/js-projects-2/${slug}" target="_blank"
          >Open Live Preview</a
        >
        <iconify-icon icon="cuida:open-in-new-tab-outline"></iconify-icon>
      </div>
    </div>
  `;

  document.querySelector('.container').innerHTML += projectTemplate;
});
