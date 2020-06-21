var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let index = Math.floor(arr.length / 2);
  const mid = arr.splice(index, 1)[0];
  console.log(index, mid, arr[index], arr);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
};

const arr = [85, 24, 63, 45, 17, 31, 96, 50];
console.log(quickSort(arr));
