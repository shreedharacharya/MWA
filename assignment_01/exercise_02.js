String.prototype.filterWords = function(values) {
  let result = this.toString();
  for(let i in values) {
    result = result.replace(values[i], "***");
  }
  return result;
}
console.log("This house is nice!".filterWords(['house', 'nice']));