let num = Math.floor (Math.random(10) *10)
function delay(sec) {
  let count = 3
const countdownInterval = setInterval(() => {
    console.log(`remaning time : ${count} seconds`);
    count--
    if(count == 0){
      clearInterval(countdownInterval)
      console.log(`Random number is :  ${num}`);
    }

  },1000)
}
delay(3)
// setTimeout(() => {
//   console.log(num);
// }, 3000)














// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100);
// }
// function generateRandomNumberWithDelay(delayInSeconds) {
//   console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);
//   let countdown = 3;
//   const countdownInterval = setInterval(() => {
//       console.log(`${countdown} seconds remaining...`);
//       countdown--;
//       if (countdown === 0) {
//           clearInterval(countdownInterval);
//           const randomNumber = generateRandomNumber();
//           console.log(`Random number generated: ${randomNumber}`);
//       }
//   }, 1000);
// }
// generateRandomNumberWithDelay(3);

