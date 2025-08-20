// 배열 복제
const arr = [1, 2, 3];
const copy = [...arr];
console.log('coopy =', copy); // [1, 2, 3]

// 배열 병합
const a = [1, 2];
const b = [3, 4];
// a의 배열 값을 복제하여 새로운 배열을 만든다.
const merged = [...a, ...b];
console.log('merged =', merged); // [1, 2, 3, 4]

// 함수 인자(arguments) 전달
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log('sum = ', sum(...nums)); // 6
// console.log(sum(1, 2, 3));

// 객체 복사
const obj = { a: 1, b: 2 };
const copyObj = { ...obj };
console.log('copyObj = ', copyObj); // { a: 1, b: 2 }

// 객체 병합
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const mergedObj = { ...o1, ...o2 };
// 키(key, 속성)가 같을 경우 뒤에 값으로 지정된다.
console.log('mergedObj = ', mergedObj); // { a: 1, b: 3, c: 4 }

// 문자열 분해
const str = "hello";
const chars = [...str];
console.log('chars = ', chars); // ['h', 'e', 'l', 'l', 'o']