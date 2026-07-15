function dnaStrand(dna){
  const dnaArr = dna.split("");
  let result = [];
  for (let i = 0; i < dnaArr.length; i++) {
    switch (dnaArr[i]) {
        case "A":
          result.push("T");
          break;
        case "T":
          result.push("A");
          break;
        case "G":
          result.push("C");
          break;
        case "C":
          result.push("G");
          break;
        default:
          console.log("incorrect element");
    }
  }
  return result.join("");
}