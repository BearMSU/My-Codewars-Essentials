function squareSum(numbers){
  return numbers.map(numbers => numbers ** 2).reduce((prev, number) => prev + number, 0);
}