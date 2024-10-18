const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const totalScores = (students) =>
  students
    .filter((student) => student.score > 50)
    .map((student) => student.score * 0.1 + student.score)
    .reduce((acc, cur) => acc + cur);
    
console.log(`Total score is ${totalScores(students)}`);
