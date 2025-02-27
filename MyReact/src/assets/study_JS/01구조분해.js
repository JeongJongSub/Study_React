//* 구조분해(Destructuring)

//& 배열 소멸
const vehicles = ['mustang','f-150','expedition'];
////옛날방식
/* 
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log(`car: ${car},truck: ${truck},suv: ${suv}`);
*/
//# 새로운 방식(구조분해)
// const [car, truck, suv] = vehicles;
// console.log(`car: ${car},truck: ${truck},suv: ${suv}`);
//! 배열을 구조화할 때 변수가 선언되는 순서가 중요하다.
const [car, , suv] = vehicles;
console.log(`car: ${car},suv: ${suv}`);


//^ 예시2)
function calculate(a,b){
  const add = a+b;
  const sub = a-b;
  const mul = a*b;
  const div = a/b;

  return [add,sub,mul,div];

}

const [add,sub,mul,div] = calculate(4,7);
console.log(add, sub, mul, div);


//& 객체 비구조화
const vehicleOne = {
  brand : 'Ford',
  model : 'Mustang',
  type : 'Car',
  year : 2021,
  color : 'Red'
}
myVehicle(vehicleOne);

////oldway
/* 
function myVehicle(vechile){
  const message = 'My'+vechile.type +'is a' + vechile.color + ' ' + vechile.brand + ' ' + vechile.model + '.';
}
 */
//# 새로운 방법
//! 객체 속성은 특정 순서로 선언할 필요가 없다!
//@ key값이 있으니까 순서대로 선언할 필요가 없는가 보다.
function myVehicle({type,color,brand,model}) {
  const message = 'My' + type + 'is a' + color + ' ' + brand + ' ' + model + '.';
}
// {type,color,brand,model} = vehicleOne;




