//* 클래스
class Car {
  constructor(name){
    this.brand = name;
  }
  
  //& EX1]
  present() {
      return console.log('I have a ' + this.brand)
  }
}
//# 생성자 함수는 객체가 초기화될 때 자동으로 호출됨
const myCar = new Car("Ford");

myCar.present();
