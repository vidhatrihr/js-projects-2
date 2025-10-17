const html = String.raw;

let principal = document.querySelector('#principal');
let interest = document.querySelector('#interest');
let fixedAmount = document.querySelector('#fixed');
let checkbox = document.querySelector('#checkbox');
let summaryCard = document.querySelector('.summary-card');

calculateMonths();

principal.addEventListener('change', () => {
  calculateMonths();
});
interest.addEventListener('change', () => {
  calculateMonths();
});
fixedAmount.addEventListener('change', () => {
  calculateMonths();
});
checkbox.addEventListener('change', () => {
  calculateMonths();
});

function calculateMonths() {
  const monthlyRate = parseFloat(interest.value) / 1200;

  const months =
    Math.log(
      parseFloat(fixedAmount.value) /
        (parseFloat(fixedAmount.value) - parseFloat(principal.value) * monthlyRate)
    ) / Math.log(1 + monthlyRate);

  if (!Number.isNaN(months)) {
    console.log('months is valid');
    updateDate(months);
  } else {
    console.log('months is not valid');
    summaryCard.innerText = 'The loan can never be paid!';
  }
}

function updateDate(months) {
  let date = new Date();
  if (checkbox.check) {
    date.setMonth(date.getMonth() + Math.round(months));
  } else {
    date.setMonth(date.getMonth() + Math.round(months) - 1);
  }

  date = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
  });

  let totalPayment = parseFloat(fixedAmount.value) * months;
  let totalInterestPaid = totalPayment - parseFloat(principal.value);

  let summaryTemplate = html`
    <div>Loan completed by: ${date}</div>
    <div>Total months: ${Math.round(months)}</div>
    <div>Monthly payment: ₹${parseFloat(fixedAmount.value)}</div>
    <div>Total principal paid: ₹${parseFloat(principal.value)}</div>
    <div>Total interest paid: ₹${totalInterestPaid.toFixed(2)}</div>
    <div>Total payment: ₹${totalPayment.toFixed(2)}</div>
  `;

  summaryCard.innerHTML = summaryTemplate;
}
