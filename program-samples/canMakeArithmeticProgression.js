var canMakeArithmeticProgression = function (arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const uniformDiff = sortedArray[1] - sortedArray[0];
  let isUniform = true;
  for (let i = 1; i <sortedArray.length; i++){
    if (sortedArray[i + 1] && (sortedArray[i] + uniformDiff) != sortedArray[i + 1]){
      isUniform = false;
      break
    }
  }
  return isUniform;
};

console.log(canMakeArithmeticProgression([1, 2, 4]));