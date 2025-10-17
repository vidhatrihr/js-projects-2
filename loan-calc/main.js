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
  const principal = parseFloat(principalInput.value);
  const interestRate = parseFloat(interestInput.value) / 100 / 12;
  const monthlyPayment = parseFloat(fixedPaymentInput.value);

  if (principal <= 0 || interestRate < 0 || monthlyPayment <= 0) return;

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
  }

  let date = new Date();
  if (checkboxInput.checked) {
    date.setMonth(date.getMonth() + monthsCount - 1);
  } else {
    date.setMonth(date.getMonth() + monthsCount);
  }

  date = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  let totalPayment = monthlyPayment * monthsCount + balance;

  summaryLastMonthEl.innerText = date;
  summaryMonthsEl.innerText = monthsCount;
  summaryPrincipalEl.innerText = principal;
  summaryInterestEl.innerText = totalPayment - principal;
  summaryPaymentEl.innerText = totalPayment.toFixed(2);
}
