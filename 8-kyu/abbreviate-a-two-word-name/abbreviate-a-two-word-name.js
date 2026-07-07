function abbrevName(name){
​
    // code away
  const firstLetters = name.split(" ").map(word => word[0]);
  return firstLetters.join(".").toUpperCase();
}