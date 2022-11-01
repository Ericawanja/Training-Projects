function print(num) {
  function checkPrint(num) {
    if (num % 3 != 0 || num % 5 != 0) return num;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 5 === 0) return "Buzz";
    if (num % 3 === 0) return `Fizz ${num}`;
  }
  num++;
  if (num <= 100) console.log(num); //(checkPrint(num));
  else {
    return;
  }
}

print(0);
