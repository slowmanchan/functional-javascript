// convert this for loop to a map function
// function doubleAll(numbers) {
//   var result = [];
//   for (var i = 0; i < numbers.length; i++){
//     result.push(numbers[i] * 2);
//   }
//   return result;
// }

function doubleAll(numbers) {
  return numbers.map(function(number) {
    return number * 2;
  });
}

module.exports = doubleAll;
