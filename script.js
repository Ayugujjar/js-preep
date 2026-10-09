let name = "Ayush";
console.log("Hello, " + name);

/*let a = 36;
let isPrime = true;

if (a <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(a + " is prime");
} else {
  console.log(a + " is not prime");
}*/
/*const promt = require("prompt-sync")();
let a = Number(promt("enter a number "));
for (i = 0; i < a; i++) {
  console.log(i);
}*/
let a = [20, 40, 78, 89, 90, 43];
a.splice(3, 2, 3, 4, 5, 6);
console.log(a);
