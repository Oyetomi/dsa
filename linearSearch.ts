function linearSearch(arr: number[], num: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

const arr = [2, 3, 4, 5, 6];
const num = 5;

console.log(linearSearch(arr, num));
