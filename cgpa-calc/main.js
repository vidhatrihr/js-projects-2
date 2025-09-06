const points = {
  s: 10,
  a: 9,
  b: 8,
  c: 7,
  d: 6,
  e: 4,
};

const courses = {
  maths1: {
    credit: 4,
    fullname: 'Mathematics for Data Science I',
  },
  stats1: {
    credit: 4,
    fullname: 'Statistics for Data Science I',
  },
  ct: {
    credit: 4,
    fullname: 'Computational Thinking',
  },
  english1: {
    credit: 4,
    fullname: 'English I',
  },
  maths2: {
    credit: 4,
    fullname: 'Mathematics for Data Science II',
  },
  stats2: {
    credit: 4,
    fullname: 'Statistics for Data Science II',
  },
  python: {
    credit: 4,
    fullname: 'Programming in Python',
  },
  english2: {
    credit: 4,
    fullname: 'English II',
  },
  dbms: {
    credit: 4,
    fullname: 'Database Management Systems',
  },
  pdsa: {
    credit: 4,
    fullname: 'Programming, Data Structures and Algorithms using Python',
  },
  mad1: {
    credit: 4,
    fullname: 'Modern Application Development I',
  },
  mad1Proj: {
    credit: 2,
    fullname: 'Modern Application Development I - Project',
  },
  java: {
    credit: 4,
    fullname: 'Programming Concepts using Java',
  },
  mad2: {
    credit: 4,
    fullname: 'Modern Application Development II',
  },
  mad2Proj: {
    credit: 2,
    fullname: 'Modern Application Development II - Project',
  },
  sc: {
    credit: 3,
    fullname: 'System Commands',
  },
  mlf: {
    credit: 4,
    fullname: 'Machine Learning Foundations',
  },
  bdm: {
    credit: 4,
    fullname: 'Business Data Management',
  },
  mlt: {
    credit: 4,
    fullname: 'Machine Learning Techniques',
  },
  mlp: {
    credit: 4,
    fullname: 'Machine Learning Practice',
  },
  mlpProj: {
    credit: 2,
    fullname: 'Machine Learning Practice - Project',
  },
  tds: {
    credit: 3,
    fullname: 'Tools in Data Science',
  },
  bdmProj: {
    credit: 2,
    fullname: 'Business Data Management - Project',
  },
  ba: {
    credit: 4,
    fullname: 'Business Analytics',
  },
  dl: {
    credit: 4,
    fullname: 'Introduction to Deep Learning and Generative AI',
  },
  dlProj: {
    credit: 2,
    fullname: 'Deep Learning and Generative AI - Project',
  },
  se: {
    credit: 4,
    fullname: 'Software Engineering',
  },
  st: {
    credit: 4,
    fullname: 'Software Testing',
  },
  ai: {
    credit: 4,
    fullname: 'AI: Search Methods for Problem Solving',
  },
  dlCore: {
    credit: 4,
    fullname: 'Deep Learning',
  },
  spg: {
    credit: 4,
    fullname: 'Strategies for Professional Growth',
  },
};

const coursesArr = Object.keys(courses);

coursesArr.forEach(course => {
  // const tr = document.createElement('tr');
  // const courseTd = document.createElement('td');
  // courseTd.innerText = courseNames[course];
  // const creditsTd = document.createElement('td');
  // creditsTd.innerText = credits[course];
  // const gradesTd = document.createElement('td');
  // let input = document.createElement('input');
  // input.id = `#${course}-input`;
  // gradesTd.append(input);
  // tr.append(courseTd);
  // tr.append(creditsTd);
  // tr.append(gradesTd);
  // document.querySelector('tbody').append(tr);

  const html = `
          <tr>
            <td class="course-name">${courses[course].fullname}</td>
            <td>${courses[course].credit}</td>
            <td>
              <select id="${course}-input" onchange="calculate()">
                <option value="" selected>Not done</option>
                <option value="s">S</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
              </select>
            </td>
          </tr>
  `;

  document.querySelector('tbody').innerHTML += html;
});

function calculate() {
  let numerator = 0;
  let denominator = 0;
  const grades = {};
  coursesArr.forEach(course => {
    let grade = document.querySelector(`#${course}-input`).value;
    grades[course] = grade;
    if (grade != '') {
      numerator += points[grade] * courses[course].credit;
      denominator += courses[course].credit;
    }
  });

  const cgpa = numerator / denominator;

  document.querySelector(
    '#result'
  ).innerText = `CGPA: ${numerator} / ${denominator} = ${cgpa.toFixed(2)}`;
  saveToLocalStorage(grades);
}

function saveToLocalStorage(grades) {
  localStorage.setItem('grades', JSON.stringify(grades));
  console.log('saving');
}

function restoreFromLocalStorage() {
  const grades = JSON.parse(localStorage.getItem('grades'));

  coursesArr.forEach(course => {
    document.querySelector(`#${course}-input`).value = grades[course];
  });
  calculate();
}

restoreFromLocalStorage();
