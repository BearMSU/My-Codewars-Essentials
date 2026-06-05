function nameShuffler(str){
  //Shuffle It
  let strArray = str.split(" ");
  const new_string = String(strArray[1]) + " " + String(strArray[0]);
  return new_string;
}