//* 스프레드 연산자
//& EX1]
//배열 복사
const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombine = [...numbersOne,...numbersTwo];
console.log(numbersCombine);

//& EX2]
//구조분해
const numbers = [1,2,3,4,5,6];
const [one,two,...rest] = numbers;
console.log(`one: ${one}, two: ${two}, rest: ${rest}`);

//& EX3]
//객체에도
const myVehicle = {
  brand : 'Ford',
  model : 'Mustang',
  color : 'red'
}

const updateMyVechicle = {
  type : 'car',
  year : 2021,
  color : 'yellow'
}

const myUpdatedVechicle = {...myVehicle,...updateMyVechicle}
console.log(myUpdatedVechicle);
//# color가 red -> yellow로 씌워졌다.