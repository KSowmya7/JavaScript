function generateOtp() {
  const Length = 4;
  let otp = '';

  for (let i = 0; i < Length; i++) {
    otp = otp+Math.floor(Math.random() * 10); 
  }
  return otp;
}
const otp = generateOtp();
console.log(`Here is your OTP: ${otp}`);
