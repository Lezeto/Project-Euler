function largestPrimeFactor(number) {
  let factor = 2;
  let lastFactor = 1;

  while (number > 1) {
    if (number % factor === 0) {
      lastFactor = factor;
      number = number / factor;
      // keep dividing by the same factor
      while (number % factor === 0) {
        number = number / factor;
      }
    }
    factor++;
  }

  return lastFactor;
}

largestPrimeFactor(13195); // 29