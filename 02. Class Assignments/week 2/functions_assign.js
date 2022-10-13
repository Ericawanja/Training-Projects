function print(num = 1) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`Fizzbuzz ${num}`);
  } else if (num % 5 == 0) {
    console.log(`Buzz ${num}`);
  } else if (num % 3 == 0)  {
     
      console.log(`Fizz ${num}`);
    
  }else{
    console.log(num)
  }
  num++;
  if (num <= 100) {
    print(num);
  }

  return;
}
print()
