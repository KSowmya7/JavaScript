function calculateRemaningDays(eventDate) {
  const currentDate = new Date();
  const eventDateTime = new Date(eventDate);
  const timeDifference = eventDateTime - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}
const eventDate = '2023-9-31';
console.log(calculateRemaningDays(eventDate));
