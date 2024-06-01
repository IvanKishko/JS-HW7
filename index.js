// todo TASK 1
let arr = [1, 2, 3];
arr[1] = 10;
console.log(arr);
// todo TASK 2
let strings = ["str 1", "str 2", "str 3"];
strings.push("new string");
console.log(strings);
// todo TASK 3
let numbers = [2, 1, 6, 52, 49, 8];
let sum = 0;
for (const i of numbers) {
  sum += i;
}
console.log(sum);
// todo TASK 4
let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
// todo TASK 5
let string = [["Ivan"], ["JS"], [1, 2, 3, 4], ["More than 5"], ["Less"]];

for (i of string) {
  if ((i.length = 5)) {
    console.log(i);
  }
}
// todo TASK 6
let taskSixNumbers = [3, 7, 2, 5, 9, 1, 8, 6, 4, 10];
let maxNumber = Math.max(taskSixNumbers);
console.log(maxNumber);
// todo TASK 7
let numbersTaskSeven = [12, 43, 56, 32, 7, 70, 3, 1, 78, 100];
for (let i = 0; i <= numbersTaskSeven.length; i++) {
  if (numbersTaskSeven[i] % 2 !== 0) {
    continue;
  } else {
    console.log(numbersTaskSeven[i]);
  }
}
