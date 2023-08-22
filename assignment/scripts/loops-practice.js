console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?

    // The end limit needs to be adjusted to 'i<=5'or 'i<6'

console.log('\n1.a');
console.log('count from 0 to 5');

for (let i=0; i<=5; i++) {  
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
    // Both the initial value of i should be 3
    // as well as changing the end condition to 'i<=5' here too

console.log('\n1.b');
console.log('count from 3 to 5');

for (let i=3; i<=5; i++) {  
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
    // All three sections of the 'for' parameters need to be changed.
      // initial value for i should be 2
      // the end parameter should be 'i<=10'
      // the incrementer should be 2 instead of 1 'i += 2'

console.log("\n1.c");
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i=2; i<=10; i += 2) {  
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

console.log("\n1.d");
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>=0; i-=1) {  
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

console.log("\n2.a");
console.log('Some stars:');

for (let star of stars){
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
 
console.log("\n3.a");
console.log('Some stars using while:');

let starCount = 0;
while (starCount <= stars.length - 1) {
  console.log(stars[starCount]);
  starCount += 1;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5

console.log("\n3.b");
console.log('count from 0 to 5');

let num = 0;
while (num <= 5 ){
  console.log(num);
  num += 1;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5

console.log("\n3.c");
console.log('count backwards from 10 to 5');

num = 10;
while (num >= 5) {
  console.log(num);
  num -= 1;
}