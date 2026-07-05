function countSheeps(sheep) {
  // TODO
  let count = 0
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === undefined || sheep[i] === null) {
      count += 0;
    } else if (sheep[i] === false) {
      count += 0;
    } else {
      count += 1;
    }
  }
  return count
}