function largestPalindromeProduct(n) {
  const max = 10 ** n - 1;
  const min = 10 ** (n - 1);
  let largest = 0;

  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      const product = i * j;
      if (product <= largest) break;
      const str = product.toString();
      if (str === str.split("").reverse().join("")) {
        largest = product;
      }
    }
  }
  return largest;
}

largestPalindromeProduct(3);