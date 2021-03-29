// function findMostRepeatedWord(str,word,w2) {
//     let words = str.match(/\w+/g);
//     console.log(words); // [ 'How', 'do', 'you', 'do' ]
  
//     let occurances = {};
  
//     for (let word of words) {
//       if (occurances[word]) {
//         occurances[word]++;
//       } else {
//         occurances[word] = 1;
//       }
//     }
  
//     console.log(occurances); // { How: 1, do: 2, you: 1 }
  
//     let max = 0;
//     let mostRepeatedWord = '';
  
//     for (let word of words) {
//       if (occurances[word] > max) {
//         max = occurances[word];
//         mostRepeatedWord = word;
//       }
//     }
  
//     return mostRepeatedWord;
//   }
//   let str = 'How do you do?';
// console.log(findMostRepeatedWord(str)); // Result: "do"


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

