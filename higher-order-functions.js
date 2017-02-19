function repeat(operation, num) {
  //solution
  if (num > 0) {
    operation();
    repeat(operation, --num);
  }
}

module.exports = repeat;
