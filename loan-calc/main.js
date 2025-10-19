const html = String.raw;

const principalInput = document.querySelector('#principal');
const interestInput = document.querySelector('#interest');
const fixedPaymentInput = document.querySelector('#fixed-payment');
const DurationSelect = document.querySelector('#duration-select');
const checkboxInput = document.querySelector('#checkbox');

const errorMessageEl = document.querySelector('#error-message');
const summaryLastMonthEl = document.querySelector('.summary-last-month');
const summaryMonthsEl = document.querySelector('.summary-months');
const summaryMonthlyPaymentEl = document.querySelector('.summary-monthly-payment');
const summaryPrincipalEl = document.querySelector('.summary-principal');
const summaryInterestEl = document.querySelector('.summary-interest');
const summaryPaymentEl = document.querySelector('.summary-payment');

principalInput.addEventListener('input', calculateLoan);
interestInput.addEventListener('input', calculateLoan);
fixedPaymentInput.addEventListener('input', calculateLoan);
DurationSelect.addEventListener('change', calculateLoan);
checkboxInput.addEventListener('change', calculateLoan);

document.querySelectorAll('input[name=calculationMode]').forEach(radio => {
  radio.addEventListener('change', () => {
    let show = radio.value;
    let hide = radio.value == 'fixedDuration' ? 'fixedPayment' : 'fixedDuration';

    document.querySelector(`label[data-${show}]`).classList.remove('hidden');
    document.querySelector(`label[data-${hide}]`).classList.add('hidden');

    calculateLoan();
  });
});

const rupeeFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
});

calculateLoan();

function calculateLoan() {
  resetUI();

  let principal = parseFloat(principalInput.value);
  let interestRate = parseFloat(interestInput.value) / 100 / 12;
  let monthlyPayment = parseFloat(fixedPaymentInput.value);
  let duration = parseFloat(DurationSelect.value);
  let calculationMode = document.querySelector('input[name=calculationMode]:checked').value;

  if (!(principal > 0 && interestRate >= 0 && monthlyPayment > 0)) {
    errorMessageEl.innerText = 'Invalid inputs';
    errorMessageEl.hidden = false;
    return;
  }

  if (calculationMode == 'fixedDuration') {
    if (interestRate == 0) {
      monthlyPayment = principal / duration;
    } else {
      // monthlyPayment  = [ p x r x (1 + r)^n] / [(1 + r)^n -1]
      let p = principal;
      let r = interestRate;
      let n = duration;

      monthlyPayment = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);

      if (Number.isNaN(monthlyPayment)) {
        errorMessageEl.innerText = 'Calculation failed. Decrease duration or interest rate.';
        errorMessageEl.hidden = false;
      }

      if (monthlyPayment - principal * interestRate < 0.01) {
        monthlyPayment += 0.01;
      }
    }
  }

  let balance = principal;

  let monthsCount = 0;
  while (balance > 0) {
    let interestPaid = balance * interestRate;
    let principalPaid = monthlyPayment - interestPaid;

    if (principalPaid <= 0) {
      errorMessageEl.innerText =
        'Monthly payment can never be paid off. Please increase the payment.';
      errorMessageEl.hidden = false;
      return;
    }

    balance -= principalPaid;
    balance = balance > 0 && balance < 0.01 ? 0 : balance;

    monthsCount += 1;

    updateTable({ monthsCount, interestPaid, principalPaid, balance });
  }

  if (calculationMode == 'fixedDuration' && monthsCount < duration) {
    errorMessageEl.innerText = `Not possible to extend your EMI over ${duration} months.`;
    errorMessageEl.hidden = false;
  }

  updateSummary({ monthlyPayment, monthsCount, principal, balance });
}

function resetUI() {
  errorMessageEl.hidden = true;
  document.querySelector('tbody').innerHTML = '';

  summaryLastMonthEl.innerText = '_';
  summaryMonthsEl.innerText = '_';
  summaryMonthlyPaymentEl.innerText = '_';
  summaryPrincipalEl.innerText = '_';
  summaryInterestEl.innerText = '_';
  summaryPaymentEl.innerText = '_';
}

function updateTable({ monthsCount, interestPaid, principalPaid, balance }) {
  let date = new Date();
  date.setMonth(date.getMonth() + monthsCount - checkboxInput.checked);

  let formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  if (balance <= 0) {
    principalPaid += balance;
    balance = 0;
  }

  let template = html`
    <tr>
      <td>${formattedDate}</td>
      <td>${rupeeFormatter.format(principalPaid)}</td>
      <td>${rupeeFormatter.format(interestPaid)}</td>
      <td>${rupeeFormatter.format(balance)}</td>
    </tr>
  `;

  document.querySelector('tbody').innerHTML += template;
}

function updateSummary({ monthlyPayment, monthsCount, principal, balance }) {
  let date = new Date();
  date.setMonth(date.getMonth() + monthsCount - checkboxInput.checked);

  let formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  let totalPayment = monthlyPayment * monthsCount + balance;

  summaryLastMonthEl.innerText = formattedDate;
  summaryMonthsEl.innerText = monthsCount;
  summaryMonthlyPaymentEl.innerText = rupeeFormatter.format(monthlyPayment);
  summaryPrincipalEl.innerText = rupeeFormatter.format(principal);
  summaryInterestEl.innerText = rupeeFormatter.format(totalPayment - principal);
  summaryPaymentEl.innerText = rupeeFormatter.format(totalPayment);
}
