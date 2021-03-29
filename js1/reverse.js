
//Reverse array
var arrayOne = ["C", "B", "A"]


var reverse = function(array){
    var arrayOne = array
    var array2 = [];

    for (var i = arrayOne.length-1; i >= 0; i--){
      array2.push(arrayOne[i])
    } 
    return array2
}

console.log(reverse(arrayOne))
//check if array is unique
function checkIfArrayIsUnique(myArray) 
    {
        for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = 0; j < myArray.length; j++) 
            {
                if (i != j) 
                {
                    if (myArray[i] == myArray[j]) 
                    {
                        return false;                     }
                }
            }
        }
        return true; 
    }
console.log(checkIfArrayIsUnique([1,4,5,7,9,8,0]));