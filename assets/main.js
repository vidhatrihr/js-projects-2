const html = String.raw;

fetchData();

async function fetchData() {
  let response = await fetch('./assets/projects_data.json');
  let data = await response.json();
  renderProjects(data);
}

function renderProjects(data) {
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
          <img src="./assets/screenshots/${slug}.png" alt="${title}" />
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
}
