
var hammingWeight = function (n) {
  let count = 0;
  while(n !== 0){
    
   const compare = n & 1;
   if(compare == 1) count+=1;
   n>>>=1;
  }
};

console.log(hammingWeight(00000000000000000000000000001011));