'use strict';
document.querySelector('.button1').addEventListener('click', function () {
  let k;
  let n1 = document.querySelector('.i1').value;
  let s = document.querySelector('.symbol').value;
  let n2 = document.querySelector('.i2').value;
  switch (s) {
    case '+':
      k = n1 + n2;
      break;
    case '-':
      k = n1 - n2;
      break;
    case '*':
      k = n1 * n2;
      break;
    case '/':
      k = n1 / n2;
      break;
  }
  document.querySelector('.message1').textContent = k;
});
document.querySelector('.clear').addEventListener('click', function () {
  document.querySelector('.i1').value = '';
  document.querySelector('.symbol').value = '';
  document.querySelector('.i2').value = '';
  document.querySelector('.message1').textContent = '';
});
