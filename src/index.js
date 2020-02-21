
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];

  if (!matrix) return result;

  matrix.forEach((item, index) => {
    if (index % 2 !== 0) result.push(...item.reverse());
    else result.push(...item);
  });

  return result;
}
