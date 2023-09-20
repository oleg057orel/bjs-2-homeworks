"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if (d === 0) {
    arr[0] = -b/(2*a)
  } 
  
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a)
    arr[1] = (-b - Math.sqrt(d) )/(2*a)
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
  let result = (payment * countMonths).toFixed(2);

  return Number(result);  
}