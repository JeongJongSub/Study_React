import { useState } from "react";

function MyCar() {
  const [brand, setBrand] = useState("Ford");
  const [model,setModel] = useState("Mustang");
  const [year,setYear] = useState("1964");
  const [color,setColor] = useState("red");
  const [car,setCar] = useState({
    brand : "Ford",
    model : "Mustang",
    year : "1964",
    color : "red"
  });

  return (
    <>
      <h4>My {brand}</h4>
      <p>It is a {color} {model} from {year}</p>

      <button type="button" className="btn btn-primary" onClick={()=>setBrand("Tesla")}>change Brand!!!</button>
      <button type="button" className="btn btn-primary" onClick={()=>setModel("E1")}>change Model!!!</button>
      <button type="button" className="btn btn-primary" onClick={()=>setYear("2025")}>change Year!!!</button>
      <button type="button" className="btn btn-primary" onClick={()=>setColor("Silver")}>change Color!!!</button>

      <h4>My {car.brand}</h4>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button type="button" className="btn btn-primary" onClick={()=>setCar({
        brand : "Tesla",
        model : "X7",
        year : "2025",
        color : "DarkSilver"
      })}>change Color!!!</button>

    </>
  )
}

export default MyCar;
