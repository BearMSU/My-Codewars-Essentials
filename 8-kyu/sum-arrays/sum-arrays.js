function sum (numbers) {
  
  if (numbers === []) {
    return 0;
  } else {
    let sum = 0;
    for (const n of numbers) {
      sum += n;
    }
    return sum;
  }
}