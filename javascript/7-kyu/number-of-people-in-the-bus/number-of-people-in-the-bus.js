var number = function(busStops){
  // Good Luck!
  let totalLeft = busStops.reduce((total, [on, off]) => total + on - off, 0);
  return totalLeft;
}