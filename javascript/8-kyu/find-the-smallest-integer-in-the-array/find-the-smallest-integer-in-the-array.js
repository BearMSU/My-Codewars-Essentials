function findSmallestInt(arr) {
  //your code here
  arr.sort((a, b) => a - b);
  return arr[0];
}