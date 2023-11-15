function binarySearch(arr: number[], target: number): boolean {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

const arr = [2, 3, 4, 5, 12, 23, 45, 74, 88];
console.log(binarySearch(arr, 400));
