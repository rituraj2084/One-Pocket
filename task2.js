function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array.');
    }
  
    let sum = 0;
    for (const number of numbers) {
      if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error('All elements of the array must be integers.');
      }
      sum += number;
    }
  
    return sum;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArray(inputArray);
  console.log('Sum:', result); // Output: Sum: 15
  