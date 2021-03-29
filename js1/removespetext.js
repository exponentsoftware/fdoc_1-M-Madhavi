function cleantext (text) {
    reg = new RegExp('[0-9]+$');
    if(text) {
      return reg.test(text);
    }
    return false;
  }

function removeSpecial (text) {
if(text) {
  var lower = text.toLowerCase();
  var upper = text.toUpperCase();
  var result = "";
  for(var i=0; i<lower.length; ++i) {
    if(cleantext(text[i]) || (lower[i] != upper[i]) || (lower[i].trim() === '') || (lower[i].trim() === '.')) {
      result += text[i];
    }
  }
  return result;
}
return '';
}
const text = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    console.log(removeSpecial(text));

//word count
function wordCount(string) {
    var m = string.match(/[^\s]+/g)
    return m ? m.length : 0;
  }
  console.log(wordCount('I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'))
  