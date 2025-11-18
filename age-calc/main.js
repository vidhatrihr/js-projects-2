function displayDate() {
  givenDate = document.querySelector('input').value;
  let inSeconds = Date.now() - Date.parse(givenDate);
  let inMonths = Math.floor(inSeconds / (1000 * 60 * 60 * 24 * 365));
  if (givenDate == '') {
    document.querySelector('#display').innerText = `You are 0 yrs old.`;
  } else {
    document.querySelector('#display').innerText = `You are ${inMonths} yrs old.`;
  }
}
displayDate();
