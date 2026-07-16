function whowon(s) {
  // Break down my frantic shouting into a list of names
  const wrestlers = s.split(" hit a reversal to ");
  
  // Look, I did the math on the back of my script:
  // If the total number of names I yelled is EVEN, the first person I named won.
  // If the total number of names I yelled is ODD, the second person I named won!
  return wrestlers.length % 2 === 0 ? wrestlers[0] : wrestlers[1];
}