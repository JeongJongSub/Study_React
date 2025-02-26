import { useState } from "react"

function MyCar2() {
  const [car,setCar] = useState({
    brand: "Tesla",
    model: "S10",
    year: "2025",
    color: "Silver"
  });

  //* 자동차 색상만 업데이트 하기
  const updateColor = () => {
    setCar(previousState => {
      return {...previousState,color:"blue"}
    });
  }

  return <>
    <h4>My {car.brand}</h4>
    <p>It is a {car.color} {car.model} from {car.year}</p>
    <button type="button" className="btn btn-warning" onClick={updateColor}>Chage Color</button>



  </>
}
export default MyCar2
