function divisors(integer) {
  const dList = [];
  for (let i = 2; i < integer; i++) {
    if(integer % i == 0) {
      dList.push(i);
    }
  }
  return dList.length === 0 ? `${integer} is prime` : dList;
}