var countOdds = function (low, high) {
  var oddCount = 0;
  for (i = low; i <= high; i++) {
    if (i & 1) {
      oddCount += 1;
    }
  }
  return oddCount;
}
console.log(countOdds(3, 7));