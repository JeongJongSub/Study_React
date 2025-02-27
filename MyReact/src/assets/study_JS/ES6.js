//* << ES6 Study >>
// for ~ of
/*
const arr = ["가","나"];
console.log(arr);
Array.prototype.username = "다";
console.log(arr);
for(const index in arr){
  console.log(arr[index]);
} //가, 나, 다
*/

const arr = ["가","나"];
console.log(arr);
Array.prototype.username = "다";
console.log(arr);
for(const value of arr){
  console.log(value);
}
//그냥 이제부터는 for(a` of a) 써야 겠다.

let auth = 123
const myArr = [1004,'가나다',true,0,auth];
console.log(myArr);
for(exArr of myArr){
  console.log(exArr);
}

//! 함수 선언문
//호이스팅 일어남
function f1(arg1){
  return "wath?";
}

//! 함수 표현식
//호이스팅 X
const f2 = function(arg2){
  return "fuck";
}

console.log(f1(2));
console.log(f2());

//! 화살표 함수
const obj = {
  name:'Ko',
  goodBy:()=>console.log('GoodBy! '+obj.name),
};

obj.goodBy();

//연습, 화살표함수 -> 일반함수
/*
const button = document.querySelector('.button');
button.addEventListener('click',()=>{
  console.log(this);
  this.innerHTML = '클릭해주세요'
});
*/
//-> 변경
/*
const button = document.querySelector('.button');
button.addEventListener('click',function() {
  console.log(this,'1')
  // console.log(this.innerText,'2'); //이것도 태그의 값이 나옴옴
  console.log(this.innerHTML,'3'); //태그의 값이 나옴
  // this.innerText = '클릭해주세요'; //페이지의 내용도 바뀜뀜
  this.innerHTML = '클릭해주세요';
  
});
*/

//! 배열 관련 유용한 함수
const arr3 = [1,2,3,4,5,];
for(let i = 0 ; i < arr3.length; i++){
  if(arr3[i] === 3)
    console.log(i);
}
console.log('-------------------------------------')
console.log(arr3.indexOf(3));



console.log('-------------------------------------')
function ge(value){
  return value >= 3;
  
}
const arrF = arr3.filter(ge);
console.log(arrF);

console.log('-------------------------------------')
//배열이 JSON객체인 경우
const arrHuman = [
  {"name":"가길동",age:10,addr:'가산동'},
  {"name":"나길동",age:20,addr:'나산동'},
  {"name":"다길동",age:30,addr:'다산동'},
];
const arrHumanF = arrHuman.filter(function(value){
  return value.age >= 20;
});
console.log(arrHumanF);


console.log('-------------------------------------')
//forEach
const brr = [1,2,3,4,5,];
function forE(ele,index){
  console.log(`arr[${index}] = ${ele}`);
}
brr.forEach(forE);


const Hrr = ['가길동','나길동','다길동','라길동','마길동'];
function HumanPath(ele,index){
  console.log(`Hrr[${index}]: ${ele}`);
}
Hrr.forEach(HumanPath);


console.log('-------------------------------------')
const arr5 = [1,2,3,4,5,];
function double(ele){
  return ele*2;
}
const arr5s = arr5.map(double);
console.log(arr5s);

console.log('-------------------------------------')
const Crr = ["가","나","다","라","마"];
function addText(str){
  return str + "길동";
  
}
const CrrMap = Crr.map(addText);
console.log(CrrMap);

console.log('-------------------------------------')
const sum = [1,2,3,4,].reduce(
  function(accu,current){
    return accu + current;
  }
);
console.log(sum);




