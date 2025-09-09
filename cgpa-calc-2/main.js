const points = {
  s: 10,
  a: 9,
  b: 8,
  c: 7,
  d: 6,
  e: 4,
};

const courses = {
  english1: { credit: 4, fullname: 'English I', level: 'foundation' },
  english2: { credit: 4, fullname: 'English II', level: 'foundation' },
  maths1: { credit: 4, fullname: 'Mathematics for Data Science I', level: 'foundation' },
  maths2: { credit: 4, fullname: 'Mathematics for Data Science II', level: 'foundation' },
  stats1: { credit: 4, fullname: 'Statistics for Data Science I', level: 'foundation' },
  stats2: { credit: 4, fullname: 'Statistics for Data Science II', level: 'foundation' },
  ct: { credit: 4, fullname: 'Computational Thinking', level: 'foundation' },
  python: { credit: 4, fullname: 'Programming in Python', level: 'foundation' },

  dbms: { credit: 4, fullname: 'Database Management Systems', level: 'diploma-dp' },
  pdsa: {
    credit: 4,
    fullname: 'Programming, Data Structures and Algorithms using Python',
    level: 'diploma-dp',
  },
  mad1: { credit: 4, fullname: 'Modern Application Development I', level: 'diploma-dp' },
  mad1Proj: {
    credit: 2,
    fullname: 'Modern Application Development I - Project',
    level: 'diploma-dp',
  },
  mad2: { credit: 4, fullname: 'Modern Application Development II', level: 'diploma-dp' },
  mad2Proj: {
    credit: 2,
    fullname: 'Modern Application Development II - Project',
    level: 'diploma-dp',
  },
  java: { credit: 4, fullname: 'Programming Concepts using Java', level: 'diploma-dp' },
  sc: { credit: 3, fullname: 'System Commands', level: 'diploma-dp' },

  mlf: { credit: 4, fullname: 'Machine Learning Foundations', level: 'diploma-ds' },
  mlt: { credit: 4, fullname: 'Machine Learning Techniques', level: 'diploma-ds' },
  mlp: { credit: 4, fullname: 'Machine Learning Practice', level: 'diploma-ds' },
  mlpProj: { credit: 2, fullname: 'Machine Learning Practice - Project', level: 'diploma-ds' },
  tds: { credit: 3, fullname: 'Tools in Data Science', level: 'diploma-ds' },
  bdm: { credit: 4, fullname: 'Business Data Management', level: 'diploma-ds' },
  bdmProj: { credit: 2, fullname: 'Business Data Management - Project', level: 'diploma-ds' },
  ba: { credit: 4, fullname: 'Business Analytics', level: 'diploma-ds' },
  dlGenAi: {
    credit: 4,
    fullname: 'Introduction to Deep Learning and Generative AI',
    level: 'diploma-ds',
  },
  dlGenAiProj: {
    credit: 2,
    fullname: 'Deep Learning and Generative AI - Project',
    level: 'diploma-ds',
  },

  se: { credit: 4, fullname: 'Software Engineering', level: 'degree' },
  st: { credit: 4, fullname: 'Software Testing', level: 'degree' },
  ai: { credit: 4, fullname: 'AI: Search Methods for Problem Solving', level: 'degree' },
  dl: { credit: 4, fullname: 'Deep Learning', level: 'degree' },
  spg: { credit: 4, fullname: 'Strategies for Professional Growth', level: 'degree' },
};

const grades = JSON.parse(localStorage.getItem('grades')) ?? {};

initializeTable();
calculate();

function initializeTable() {
  Object.keys(courses).forEach(course => {
    const temp = document.querySelector('#tr-template');
    const clone = temp.content.cloneNode(true);

    clone.querySelector('tr').classList.add(courses[course].level);
    clone.querySelector('.course-name').innerText = courses[course].fullname;
    clone.querySelector('.course-credit').innerText = courses[course].credit;

    clone.querySelector('select').id = `${course}-input`;
    clone.querySelector('select').addEventListener('change', event => {
      updateGrades(course, event.target.value);
    });
    clone.querySelector('select').value = grades[course] ?? '';
    document.querySelector('tbody').append(clone);
  });
}

// coursesArr.forEach(course => {
//   const html = `
//           <tr>
//             <td>${course}</td>
//             <td>${credits[course]}</td>
//             <td>
//               <select id="${course}-input">
//                 <option value="s">S</option>
//                 <option value="a">A</option>
//                 <option value="b">B</option>
//                 <option value="c">C</option>
//                 <option value="d">D</option>
//                 <option value="e">E</option>
//               </select>
//             </td>
//           </tr>
//   `;
//   document.querySelector('tbody').innerHTML += html;
// });

function updateGrades(course, grade) {
  grades[course] = grade;
  calculate();
}

function calculate() {
  let numerator = 0;
  let denominator = 0;

  Object.keys(grades).forEach(course => {
    const grade = grades[course];
    numerator += points[grade] * courses[course].credit;
    denominator += courses[course].credit;
  });

  const cgpa = numerator / denominator || 0;
  document.querySelector('#result').innerText = `CGPA: ${numerator} / ${denominator} = ${
    Math.ceil(cgpa * 100) / 100
  }`;
  saveToLocalStorage(grades);
}

function saveToLocalStorage(grades) {
  localStorage.setItem('grades', JSON.stringify(grades));
}
