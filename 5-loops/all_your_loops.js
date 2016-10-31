// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz ++;
}
// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
var x = 0;
while (x < 3) {
  checkz - 2;
  x ++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/*****************************************************
Loops though the numbers array, adding the value at each index
to the total variable and logs to the console the total
******************************************************/
