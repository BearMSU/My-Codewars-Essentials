function countBy(x, n) {
  return Array.from({length: n}, (_, i) => x * (i + 1));
}