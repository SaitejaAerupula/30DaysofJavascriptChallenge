//1 custom forEach implementation
// This function mimics the behavior of Array.prototype.forEach
function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

customForEach([1, 2, 3], (val, i) => console.log(`Index ${i}: ${val}`));

//2
//map implementation
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log(customMap([1, 2, 3], x => x * 2)); // [2, 4, 6]

//3 filter implementation
function customFilter(arr, callback) {
  const result = [];
  for (let val of arr) {
    if (callback(val)) result.push(val);
  }
  return result;
}

console.log(customFilter([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]

//4 reduce implementation
function customReduce(arr, callback, initial) {
  let acc = initial;
  for (let val of arr) {
    acc = callback(acc, val);
  }
  return acc;
}

console.log(customReduce([1, 2, 3], (a, b) => a + b, 0)); // 6

//5 find implementation
function customFind(arr, callback) {
  for (let val of arr) {
    if (callback(val)) return val;
  }
  return undefined;
}