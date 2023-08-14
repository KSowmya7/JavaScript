const user = ["Mithum", "Prabir", "Alka", "Shivam" ]
function isUserPresent(userName){
  for (let index = 0; index < user.length; index++) {
    if (userName === user[index]) {
    
      console.log("Yes, " +userName, "is a valid user.");
      return;
    }
    }  
      console.log("No " +userName, "is not a valid user.");
}
isUserPresent("Shivam")