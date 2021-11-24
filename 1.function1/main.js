function reverseString(message){
  // wirte your code here
  var reverse = "";
  for (var i=1; i<=message.length; i++){
    reverse = reverse + message[message.length - i];
  }
  console.log(reverse);
  return reverse;
}

reverseString('hello'); // should return 'olleh'
