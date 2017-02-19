// function countWords(inputWords) {
//   return inputWords.reduce(function(acc, val) {
//     if (val in acc) {
//       acc[val]++;
//     } else {
//       acc[val] = 1;
//     }
//     return acc;
//   }, {})
// }

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1;
    return countMap;
  }, {})
}

module.exports = countWords;
