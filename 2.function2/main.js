function reverseString(message){
  // wirte your code here
  var reverse = "";
  for (var i=1; i<=message.length; i++){
    reverse = reverse + message[message.length - i];
  }
  console.log(reverse);
  return reverse;
}


function palindrome(message){
  // wirte your code here
  var reverse = reverseString(message);
  return reverse == message ? true : false;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
