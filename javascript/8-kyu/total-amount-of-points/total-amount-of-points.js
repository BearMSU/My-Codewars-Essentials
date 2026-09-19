function points(games) {
  const groupedPairs = games.map(str => str.split(':').map(Number));
  let total = 0;
  for (const [x, y] of groupedPairs) {
    if (x > y) {
      total += 3;
    } else if ( x === y) {
      total += 1;
    } else {
      total += 0;
    }
  }
  return total;
}