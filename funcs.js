const customArray = require("./arrayPractice");

let arr = new customArray();

// console.log(arr);
// [
//   ,
//   ,
//   ,...
// =>0,
//   1,
//   2
// ]
arr.push(0);
// console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
// console.log(arr);
arr.pop();
arr.pop();
arr.pop();
// console.log(arr);
// console.log(arr.get(0));

// initial
// customArray { length: 0, size: 10, size_ratio: 2, ptr: 0 }
// after first push
// customArray { length: 1, size: 10, size_ratio: 2, ptr: 0 }
// after 11th push
// customArray { length: 11, size: 20, size_ratio: 2, ptr: 10 }
// length increased to match current contents
// size increased to allow more items
// ptr moved to current location in memory

// customArray { length: 8, size: 20, size_ratio: 2, ptr: 10 }
// length reduced to match contents
// size/ratio/ptr unchanged(on purpose)

// 0

// NaN because memory.js uses Float64

// _resize(checkMem in our code) checks memory and adds/reduces if needed

// URL stuff
let input = "tauhida parveen";
urlify = input => {
  return input.split(" ").join("%20");
};
// console.log(urlify(input));

filterArr = arr => {
  let filteredArr = [];
  arr.forEach(item => {
    if (item >= 5) filteredArr.push(item);
  });
  return filteredArr;
};

// console.log(filterArr([1, 2, 6, 8, 10]));

let inputTwo = [4, 6, -3, 5, -2, 1];
findLargestSum = inputTwo => {
  let curLar = -Infinity;
  let curSum = 0;
  for (let i = 0; i < inputTwo.length; i++) {
    curSum += inputTwo[i];
    if (curSum > curLar) curLar = curSum;
  }
  return curLar;
};

// console.log(findLargestSum(inputTwo));

let inputT = [
  [1, 3, 6, 8, 11],
  [5, 6, 7, 8, 9, 10]
];
mergeSort = (arrOne, arrTwo) => {
  let short;
  let long;
  let final = [];
  let finalLength = arrOne.length + arrTwo.length;
  let i = 0;
  let j = 0;

  if (arrOne.length > arrTwo.length) {
    short = arrTwo;
    long = arrOne;
  } else {
    short = arrOne;
    long = arrTwo;
  }
  while (i + j < finalLength) {
    if (long[i] < short[j]) {
      final.push(long[i]);
      i++;
    } else {
      final.push(short[j]);
      j++;
    }
  }
  return final;
};
// console.log(mergeSort(inputT[0], inputT[1]));

let blah = "Battle of the Vowels: Hawaii vs. Grozny";
let filter = "aeiou";

rmVow = (string, filter) => {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    if (!filter.includes(string[i])) {
      newStr += string[i];
    }
  }
  return newStr;
};
// console.log(rmVow(blah, filter));
