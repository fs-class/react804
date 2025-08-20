// 나머지 인자 받기
// 마지막 매개변수만 가능
function sum(a, b, ...numbers) {
// function sum(a, ...numbers, b ) { (x)
    // 배열 형태로 변환
    console.log('...numbers', ...numbers);
  return a + b + numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2));      // 3
console.log(sum(1, 2, 3));      // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum(5, 10, 15, 20, 100)); // 150