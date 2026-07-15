function quadratic(x1, x2){
  // (x - x1) * (x - x2) = 0
  // ax^2 + bx + c = 0
  // (x - x1) * (x - x2) = ax^2 + bx + c
  // quadratic(1, 2) = (1, -3, 2)
  // a = 1 (a is always going to be 1 in this situation since we're not preseting a with any number)
  // b = -(x1 + x2)
  // c = (x1 * x2)
  
  return [1, -(x1 + x2), x1 * x2];
}