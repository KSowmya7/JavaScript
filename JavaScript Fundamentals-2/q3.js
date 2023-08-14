const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
]
function check(students, userName){
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    if(student.name === userName){
      if (student.marks > 90) {
        console.log(`Congratulations ${student.name}! You have cleared the exam.`);
      } else {
        console.log(`Sorry ! ${student.name}! You have not cleared the exam.`);
      }
      break;
    }
  if(index === students.length - 1){
    console.log("Invalid User!!!");
  }
}
}
const studentName = "Prabir";
check(students, studentName);


