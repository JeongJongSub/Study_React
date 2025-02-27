//* 모듈
//& 인라인 - 개별적으로
export const name = "Jesse"
export const age = 40;

//& 한번에 맨 아래에서
const name = "Jeong"
const myAge = 30;
export {name, myAge}


const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;