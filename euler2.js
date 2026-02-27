function sumEvenFibonacci(n) {
  let a = 1;
  let b = 2;
  let sum = 0;
  while (a <= n) {
    if (a % 2 === 0) {
      sum += a;
    }
    const next = a + b;
    a = b;
    b = next;
  }
  return sum;
}