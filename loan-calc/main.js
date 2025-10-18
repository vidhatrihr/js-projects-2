const html = String.raw;

let principalInput = document.querySelector('#principal');
let interestInput = document.querySelector('#interest');
let fixedPaymentInput = document.querySelector('#fixed-payment');
let checkboxInput = document.querySelector('#checkbox');

let summaryLastMonthEl = document.querySelector('.summary-last-month');
let summaryMonthsEl = document.querySelector('.summary-months');
let summaryPrincipalEl = document.querySelector('.summary-principal');
let summaryInterestEl = document.querySelector('.summary-interest');
let summaryPaymentEl = document.querySelector('.summary-payment');

principalInput.addEventListener('input', calculateLoan);
interestInput.addEventListener('input', calculateLoan);
fixedPaymentInput.addEventListener('input', calculateLoan);
checkboxInput.addEventListener('change', calculateLoan);

calculateLoan();

function calculateLoan() {
  console.log('calculateLoan');
  document.querySelector('tbody').innerHTML = '';

  const principal = parseFloat(principalInput.value);
  const interestRate = parseFloat(interestInput.value) / 100 / 12;
  const monthlyPayment = parseFloat(fixedPaymentInput.value);

  if (principal <= 0 || interestRate < 0 || monthlyPayment <= 0) {
    console.warn('Invalid inputs');
    return;
  }

  let balance = principal;

  let monthsCount = 0;
  while (balance > 0) {
    let interestPaid = balance * interestRate;
    let principalPaid = monthlyPayment - interestPaid;

    if (principalPaid <= 0) {
      console.warn('Loan can never be paid,', { principalPaid, interestPaid });
      return;
    }

    balance -= principalPaid;
    monthsCount += 1;

    console.log(interestPaid, principalPaid, balance);

    updateTable({ monthsCount, interestPaid, principalPaid, balance });
  }
  updateSummary({ monthlyPayment, monthsCount, principal, balance });
}

function updateTable({ monthsCount, interestPaid, principalPaid, balance }) {
  let date = new Date();
  date.setMonth(date.getMonth() + monthsCount - checkboxInput.checked);

  date = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  let template = html`
    <tr>
      <td>${date}</td>
      <td>₹19</td>
      <td>₹1</td>
      <td>₹80</td>
    </tr>
  `;

  document.querySelector('tbody').innerHTML += template;
}

function updateSummary({ monthlyPayment, monthsCount, principal, balance }) {
  let date = new Date();
  date.setMonth(date.getMonth() + monthsCount - checkboxInput.checked);

  date = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  const rupeeFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  });

  let totalPayment = monthlyPayment * monthsCount + balance;

  summaryLastMonthEl.innerText = date;
  summaryMonthsEl.innerText = monthsCount;
  summaryPrincipalEl.innerText = rupeeFormatter.format(principal);
  summaryInterestEl.innerText = rupeeFormatter.format(totalPayment - principal);
  summaryPaymentEl.innerText = rupeeFormatter.format(totalPayment);
}
