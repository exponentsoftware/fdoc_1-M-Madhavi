//word count
function wordCount(string) {
    var m = string.match(/[^\s]+/g)
    return m ? m.length : 0;
  }
  console.log(wordCount('I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'))
  //random no
  var arr = [];
while(arr.length < 7){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) 
    arr.push(r);
}
console.log(arr);
//loop triangle
var i, j;

for(i=1; i <= 5; i++)
 {
 
  for(j=1; j<=i; j++)
 {
  document.write('#');
}
 document.write('<br/>');
}
