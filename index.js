"use strict";
// HW

// Task 1
let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);

// Значение каждого элемента

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Reverse Array
let arr0 = [];
for (let i = 100; i > 0; i--) {
  arr0.push(i);
}
console.log(arr0);

// Task 2
// Создать массив из нечетных чисел от 1 до 99
let arrNum = [];

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    arrNum.push(arr[i]);
  }
}
console.log(arrNum);

// Task 3
// Создать массив из четных чисел от 2 до 20
let Num = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2) {
    Num.push(arr[i]);
  }
}
console.log(Num);

// Task 4
// Создать массив из четных чисел от 2 до 20 и вывести сумму
let oddNum = [];
let sumNumber = 0;

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) continue;
  {
    oddNum.push(arr[i]);
  }
}
console.log(oddNum);

for (let i = 0; i < oddNum.length; i++) {
  sumNumber += oddNum[i];
}
console.log(sumNumber);

// Task 5
// Очистить массив от нежелательных значений
let arr6 = [3, true, 0, null, 56, false, undefined];
let arrokey = [];
for (let i = 0; i < arr6.length; i++) {
  if (
    !(
      arr6[i] == 0 ||
      arr6[i] == false ||
      arr6[i] == null ||
      arr6[i] == undefined
    )
  ) {
    arrokey.push(arr6[i]);
  }
}
console.log(arrokey);

// Task 6
// Найти максимальное число из массива
let arr1 = [1, 8, -9, 0, 25];
let i = 0;
let max = 0;
while (i < arr1.length) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
  i++;
}
console.log(max);

let arr2 = [1, 8, -9, 0, 30];
let max1 = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max1) {
    max1 = arr2[i];
  }
}
console.log(max1);

// Task 7
// Найти минимальное число из массива
let arr3 = [1, 8, -9, 0, 30];
let min = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < min) {
    min = arr3[i];
  }
}
console.log(min);

// Task 8
// Сравнить 2 массива ,если равны ,вывести да
let b;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] == arr1[i]) {
    b = "yes";
  } else {
    b = "no";
  }
}
console.log(b);
