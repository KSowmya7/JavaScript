let typeofPackage = 'overnight'
switch (typeofPackage) {
  case 'standard':
    console.log("Estimated delivery time 3-5 days");
    break;
  case 'express':
    console.log("Estimated delivery time 1-2 days");
    break; 
  case 'overnight':
    console.log("Estimated delivery time tomorrow");
    break; 
  default:
    console.log("Invalid package type");
    break;
}