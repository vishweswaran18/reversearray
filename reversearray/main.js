let array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}
reverseArray(array1); // ["if", "never", "sometimes", "always", "maybe", "no", "yes"]
