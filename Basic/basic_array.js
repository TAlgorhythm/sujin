Array(10).fill(0);
const b1 = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.time("Array 생성자 함수");
const a = [...new Array(1000000)].map((_, i) => i + 1);
console.timeEnd("Array 생성자 함수");

console.time("Array.from 메서드");
const b2 = Array.from({ length: 1000000 }, (_, i) => i + 1);
console.timeEnd("Array.from 메서드");

// 크롬 브라우저에서 측정
// Array 생성자 함수: 24.26708984375 ms
// Array.from 메서드: 65.093017578125 ms
