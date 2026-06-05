function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  const lengthOfQueue = queue.length;
  let wolfPosition = lengthOfQueue - wolfIndex;
  const sheepPosition = wolfPosition - 1;
  
  if (wolfPosition === 1) {
    return "Pls go away and stop eating my sheep"
  } else {
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
  }
  
  
}