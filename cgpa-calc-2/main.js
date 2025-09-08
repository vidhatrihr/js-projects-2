const points = {
  s: 10,
  a: 9,
  b: 8,
  c: 7,
  d: 6,
  e: 4,
};

credits = {
  english1: 4,
  maths1: 4,
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
  const temp = document.querySelector('#tr-template');
  const clone = temp.content.cloneNode(true);
  clone.querySelector('.course-name').innerText = courses[course].fullname;
  clone.querySelector('.course-credit').innerText = courses[course].credit;
  clone.querySelector('select').id = `${course}-input`;
  document.querySelector('tbody').append(clone);
});

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

function calculate() {
  let numerator = 0;
  let denominator = 0;
  const grades = {};
  coursesArr.forEach(course => {
    const grade = document.querySelector(`#${course}-input`).value;
    if (grade != '') {
      numerator += points[grade] * courses[course].credit;
      denominator += courses[course].credit;
    }
    grades[course] = grade;
  });
  const result = numerator / denominator;
  document.querySelector('#result').innerText = `CGPA: ${result.toFixed(2)}`;
  saveToLocalStorage(grades);
}

function saveToLocalStorage(grades) {
  localStorage.setItem('grades', JSON.stringify(grades));
}

function restoreFromLocalStorage() {
  const grades = JSON.parse(localStorage.getItem('grades'));

  // if (grades == null) return;

  coursesArr.forEach(course => {
    document.querySelector(`#${course}-input`).value = grades[course];
  });
  calculate();
}
restoreFromLocalStorage();
