var number=function(array){
  //your awesome code here
  newArray = [];
  for (let i = 1; i <= array.length; i++) {
    newArray.push(`${i}: ${array[i - 1]}`);
  }
  return newArray;
}