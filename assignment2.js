function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;

  if (str === reversed) 
    return true;

 else 
    return false; 
  
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false