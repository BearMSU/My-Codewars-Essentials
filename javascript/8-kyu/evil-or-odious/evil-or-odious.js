function evil(n) {
    const binaryN = n.toString(2)
    const numberOf1 = binaryN.split('1').length
    
    if (numberOf1 % 2 === 0) {
      return "It's Odious!"
    } else {
      return "It's Evil!"
    }
}