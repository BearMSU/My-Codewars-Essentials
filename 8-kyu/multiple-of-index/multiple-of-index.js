function multipleOfIndex(array) {
  // good luck
  let multiArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] === 0) {
      multiArr.push(array[i]);
    } else if (i > 0 && array[i] % i === 0) {
      multiArr.push(array[i]);
    }
  }
  return multiArr;
}