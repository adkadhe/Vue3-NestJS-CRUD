function PrimeNumberCheck(num){
  if(num==1){
    console.log(`${ num } is prime number.`);
  }else if(num > 1){
    let isPrime = true;
    for(let i = 2; i < num; i++){
      if((num % i == 0 )&&(num > 2)){
        isPrime = false;
        break;
      }
    }
    if (isPrime){
      console.log(`${num} is prime number.`);
    }else{
      console.log(`${num} is not prime number.`);
    }
  }else{
    console.log(`${num} is not prime number.`);
  }
}
PrimeNumberCheck(2);
PrimeNumberCheck(1);
PrimeNumberCheck(11);
PrimeNumberCheck(23);
PrimeNumberCheck(22);
PrimeNumberCheck(10);