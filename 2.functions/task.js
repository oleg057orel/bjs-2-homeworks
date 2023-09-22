function getArrayParams(...arr) {
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const initialValue = 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  let avg = Number ((sum / arr.length).toFixed(2));
 
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let differenceMaxMin;

  if (arr.length === 0) {
    differenceMaxMin = 0;
  } else {
    differenceMaxMin = max-min;
  }

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd;

  if (arr.length === 0) {
    differenceEvenOdd = 0;
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    differenceEvenOdd = sumEvenElement - sumOddElement;
  }

  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements;

  if (arr.length === 0) {
    averageEvenElements = 0;
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    }
    averageEvenElements = Number ((sumEvenElement / countEvenElement).toFixed(2));
  }

  return averageEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let valueFunction;

  if (arrOfArr.length === 0) {
    maxWorkerResult = 0;
  } else {
    for (j = 0; j < arrOfArr.length; j++) {
       valueFunction = func(...arrOfArr[j]);
       if (valueFunction > maxWorkerResult) {
        maxWorkerResult = valueFunction;
       }
    }
  }
  return maxWorkerResult;
}