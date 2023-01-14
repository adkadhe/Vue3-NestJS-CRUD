function palindrome(number){
    let original = number;
    let result = 0;
    while (number > 0){
      result = (number % 10) + result * 10;
      number = Math.floor(number / 10);
    }
  if (original === result){
      console.log(`Number is palindrome.`);
    }else{
      console.log(`Number is not a palindrome.`);
    }
}

palindrome(12111);
palindrome(111);
palindrome(121);
palindrome(123456654321);