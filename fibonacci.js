// Iterative solution
const fib = n => {
    const array = [0, 1]
    if (n <= 0) return "Not valid"
    if (n === 1) return [0];
    if (n === 2) return array;

    for (let i = 1; i < n; i++)
      array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  };

  console.log(fib(10))


// Recursive solution
const fibsRec = n => {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

     const array = fibsRec(n-1)

     return [...array, array[n-1] + array[n-2]]
}

console.log(fibsRec(10))