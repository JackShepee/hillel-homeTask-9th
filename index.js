const removeElement = function (array, item) {
  return array.filter(function (element) {
    return element !== item;
  });
};

const array = [1, 2, 3, 4, 5, 6, 7, 5, 5];
const newArray = removeElement(array, 5);
console.log(newArray);

module.exports = removeElement;