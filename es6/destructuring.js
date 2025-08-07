/**
 * 구조 분해 할당(Destructuring Assignment)
 *  - 객체 또는 배열의 값을 개별 변수로 쉽게 꺼내는 문법
 * 
 * 
 * 참고: Code Runner 실행은 ctrl+alt+n
 */

// 배열 구조 분해
const arr = [4, 5, 6];
// [a, b, c] = [4, 5, 6]
const [a, b, c] = arr;

console.log(a); // 4
console.log(b); // 5
console.log(c); // 6

// 기본값 설정, 값을 주면 기본값은 무시된다.
const [x, y, z = 100] = [10, 20, 30];
console.log('x=', x); // x= 10
console.log('y=', y); // y= 20
console.log('z=', z); // z= 30

// 객체 구조 분해
const user = { _name: '홍길동', age: 25 };
const { _name, age } = user;

console.log(_name); // 홍길동
console.log(age);  // 25

// 다른 변수 이름으로 할당 (별칭 사용)
// {속성: 별칭}
const { _name: userName, age: userAge } = user;
console.log('userName =', userName); // userName = 홍길동
console.log('userAge =', userAge); // userAge = 25

// 기본값 설정
const { job = '개발자' } = user;
console.log(job); // 개발자

// 함수의 매개변수에서 구조 분해 (React에서 매우 자주 사용)
// {name2, age2} = user2
// {name2, age2} = {name2: 'Jane', age2: 22}
function printUser({ name2, age2 }) {
    console.log(`${name2}(${age2})`);
}
const user2 = { name2: 'Jane', age2: 22 };
printUser(user2);

// 중첩 구조 분해
// {{}}
const user3 = {
    name: '철수',
    address: {city: '서울', zip: '12345'}
};

const {address: {city}, address: {zip}} = user3;

console.log(city,'(',zip,')'); // 서울 ( 12345 )
console.log(city + '(' + zip + ')'); // 서울(12345)
// ${표현식}
console.log(`${city}(${zip})`); // 서울(12345)

// 리액트 구조 분해 할당
// const [변수, 함수] = useState(초깃값);
// 변수는 상태 값
// 함수는 상태 변경 함수
// 함수 이름은 set변수명, 카멜 표기법으로 쓴다. (관례)
// const [count, setCount] = useState(0);

const handleChange = (e)=>{
    console.log(e.target);
    // const {name3, value3} = e.target;
    // console.log(`${name3}: ${value3}`);
};

handleChange();