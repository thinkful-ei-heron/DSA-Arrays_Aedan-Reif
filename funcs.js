const customArray = require('./arrayPractice');

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
let input = 'tauhida parveen';
const urlify = input => {
  return input.split(' ').join('%20');
};
// console.log(urlify(input));

const filterArr = arr => {
  let filteredArr = [];
  arr.forEach(item => {
    if (item >= 5) filteredArr.push(item);
  });
  return filteredArr;
};

// console.log(filterArr([1, 2, 6, 8, 10]));

let inputTwo = [4, 6, -3, 5, -2, 1];
const findLargestSum = inputTwo => {
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
const mergeSort = (arrOne, arrTwo) => {
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

let blah = 'Battle of the Vowels: Hawaii vs. Grozny';
let filter = 'aeiou';

const rmVow = (string, filter) => {
  let newStr = '';

  for (let i = 0; i < string.length; i++) {
    if (!filter.includes(string[i])) {
      newStr += string[i];
    }
  }
  return newStr;
};
// console.log(rmVow(blah, filter));


//10. Products

let productInput = [1, 3, 9, 4];

const products = (list) => {
  let product;
  let output = [];

  for (let i = 0; i < list.length; i++) {
    product = 1;
    for (let j = 0; j < list.length; j++) {
      if (i !== j) {
        product *= list[j];
      }
    }
    output.push(product);
  }
  return output;
};

console.log(products(productInput));

// Below is Reif's solution because he wanted O(n) vs O(n^2) both work.
let nums = [2, 3, 4, 5, 6];
const productOfNums = nums => {
  let product = new Array(nums.length).fill(1);
  let multiplier = 1;
  for (let i = 0; i < nums.length; i++) {
    product[i] *= multiplier;
    multiplier *= nums[i];
  }

  multiplier = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    product[j] *= multiplier;
    multiplier *= nums[j];
  }
  return product;
};

console.log(productOfNums(nums));



//11. 2D array

const twoDArray = (multiArray) => {
  let corruptedColumns = [];
  let newMulti = [...multiArray];
  let finalMulti = [];

  //check row for 0's and add index to corruptedColumns. 
  //if any 0's in row set all values to 0
  //escape
  //else check corruptedColumns for length. if there set columns = 0;

  for (let i = 0; i < newMulti.length; i++) {
    let currentRow = [...newMulti[i]];
    let zeroBool = false;

    for (let j = 0; j < currentRow.length; j++) {
      if (currentRow[j] === 0) {
        zeroBool = true;
        corruptedColumns.push(j);
      }
    }

    if (zeroBool) {
      finalMulti.push(new Array(currentRow.length).fill(0));
    } else finalMulti.push(currentRow);
  }

  for (let i = 0; i < corruptedColumns.length; i++) {

    for (let j = 0; j < finalMulti.length; j++) {

      let currentRow = [...finalMulti[j]];
      currentRow[corruptedColumns[i]] = 0;
      finalMulti[j] = currentRow;
    }
  }

  return finalMulti;
};

let multi = 
[[1, 0, 1, 1, 0],
[0, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
[1, 0, 1, 1, 1],
[1, 1, 1, 1, 1]];

console.log(twoDArray(multi));


//12. String rotation


const rotation = (string1, string2) => {
  let rotatedStr = string2 + string2;
  return string1.length === string2.length && rotatedStr.includes(string1);
};

let rot1 = ['amazon', 'azonma'];
let rot2 = ['amazon ', 'azon am'];

console.log(rotation(...rot1));
console.log(rotation(...rot2));

