const vehicleOne = {
  brand : 'Ford',
  model : 'Mustang',
  type : 'car',
  year : 2021,
  color : 'red',
  registration: {
    city : 'Houston',
    state : 'Texax',
    country : 'USA'
  }
}

myVehicle(vehicleOne);

function myVehicle({model,registration:{state}}) {
  const message = 'My' + model + 'is registered in ' + state + '.';

}

//^ (정리)
//^ 배열을 구조분해 할때는 변수가 선언되는 순서가 중요하다
//^ 객체를 구조분해 할때는 속성의 순서는 상관 없다!