/**
 You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 */
var areAlmostEqual = function (s1, s2) {
if(s1 === s2) return true;

if(s1.length != s2.length) return false;

if (s1 != s1.toLowerCase() && s2 != s2.toLowerCase() ) return false;

let count = 0;
let idx1 , idx2;
for(let i =0; i< s2.length; i++){
  if(s1[i] != s2[i] ){
    count++;
    idx1 = i;
  } 
}

for(let j = s2.length - 1; j >= 0; j--){
  if(s1[j] != s2[j]){
    idx2 = j;
  };
}

if(count == 0 || count == 2){ 
  return (s1[idx1] == s2[idx2]) && (s1[idx2] == s2[idx1]);
}
 return false;
};

console.log(areAlmostEqual("bank", "kanb")); //true
console.log(areAlmostEqual("attack", "defend")); //false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("abcd", "dcba")); //false
console.log(areAlmostEqual("abedcd", "dbedca")); //true
console.log(areAlmostEqual("ABCD", "abcd")); //false
console.log(areAlmostEqual("test", "ak")); //false
