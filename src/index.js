const toOneNumberArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9) {
      if (!arr[i + 1]) {
        arr.push(0);
      }
      arr[i + 1] += Math.floor(arr[i] / 10);
      arr[i] %= 10;
    }
  }
  return arr;
};

const addToArr = (fArr, sArr) => {
  if (fArr === []) {
    return sArr;
  }
  if (sArr === []) {
    return fArr;
  }
  const max = Math.max(fArr.length, sArr.length);
  const result = [];
  fArr = fArr.reverse();
  sArr = sArr.reverse();
  for (let i = 0; i < max; i++) {
    if (!fArr[i]) {
      fArr[i] = 0;
    }
    if (!sArr[i]) {
      sArr[i] = 0;
    }
    result[i] = +fArr[i] + +sArr[i];
  }
  return toOneNumberArr(result).reverse();
};

const multToOneNumber = (firstMult, oneNumb) => {
  if (oneNumb !== '0') {
    const result = (firstMult.split('')).reverse();
    for (let i = 0; i < result.length; i++) {
      result[i] *= oneNumb;
    }
    return toOneNumberArr(result).reverse();
  }
  return [];
};

module.exports = function multiply(first, second) {
  let result = [];
  let countZero = 0;
  for (let i = second.length - 1; i >= 0; i--) {
    const temp = multToOneNumber(first, second[i]);
    for (let j = 0; j < countZero; j++) {
      temp.push(0);
    }
    result = addToArr(result, temp);
    countZero++;
  }
  while (result[0] === 0) {
    result.splice(0, 1);
  }
  return result.join('');
};
