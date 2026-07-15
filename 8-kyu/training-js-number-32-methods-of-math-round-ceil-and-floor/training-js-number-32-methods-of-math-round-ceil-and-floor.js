function roundIt(n){
  //coding here...
  let x = String(n).split('.');
  if (x[0].length > x[1].length) {
    return Math.floor(n);
  } else if (x[0].length < x[1].length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
}