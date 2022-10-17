function checkPrint(num) {
  //if (num % 3 !== 0 || num % 5 !== 0) console.log(num);
  if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
  if (num % 5 === 0)  console.log("Buzz");
  if (num % 3 === 0) console.log(`Fizz ${num}`);
  num = num+1;
  if (num <= 100) checkPrint(num);
}

checkPrint(1);
