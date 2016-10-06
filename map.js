'use strict'
// ES6

const amap = (input) => {
  let result = [];
  input.forEach((elm) => {
    result.push(elm.length);
  });
  return result;
};

console.log(map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length }));

// let array = ["ab","abc"];
// console.log(array.amap);
