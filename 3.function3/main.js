function alphabetSort(message){
  // wirte your code here
  var array = message.split('');
  var sorted = array.sort();
  return sorted.join('');
}
alphabetSort('hello'); // should return 'ehllo'
