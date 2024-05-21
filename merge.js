
let numbers = [];
while (true) {
  let num = prompt("Enter a number to 'stop' or finish):");
  if (num === "stop") {
    break;
  }
  numbers.push(Number(num));
}


let target = prompt("Enter a number to find its index:");


function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

numbers = mergeSort(numbers);


let indexes = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === Number(target)) {
    indexes.push(i);
  }
}


alert(`Sorted array: ${numbers}\nIndexes of ${target}: ${indexes}`);