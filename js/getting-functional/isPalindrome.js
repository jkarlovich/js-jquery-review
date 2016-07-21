// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

// var str = 'racecar';

// Example Output

// false

function isPalindrome(string) {
  var newString = string.toLowerCase().split('').reverse().join('');
  console.log('string: ' + string);
  console.log('reversed string: ' + newString);
  if(string === newString) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
};

isPalindrome('Banana');
isPalindrome('racecar');
