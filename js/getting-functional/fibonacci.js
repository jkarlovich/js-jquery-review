// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13

// var array = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

function fib(n) {
  var array = [1, 1];
  if(n === 1 || n === 2) {
    console.log(1);
    return 1;
  } else {
  for (var i = 3; i <= n; i++) {
    array.push((array[i-3]) + (array[i-2]));
    }
    console.log(array[array.length-1]);
    return array[array.length-1];
  }
}

fib(7);
