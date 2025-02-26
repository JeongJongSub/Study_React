import { useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("Blue");

  return <>
  
    <h3>My favorite color is {color}!</h3>
    <button className="btn btn-danger" type="button" onClick={()=>setColor("Red")}>Change Text</button>
  </>
}

