function findOdd(A) {
  //happy coding!
  let oddSet = new Set();
  
  for (const num of A) {
    if(oddSet.has(num)) {
      oddSet.delete(num);
    } else {
      oddSet.add(num);
    }
  }
  
  return [...oddSet][0];
}