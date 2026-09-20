function friend(friends){
  //your code here
  trueFriends = [];
  for (name of friends) {
    if (name.length === 4) {
      trueFriends.push(name);
    }
  }
  return trueFriends;
}