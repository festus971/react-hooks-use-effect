import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount]=useState(0);
  const [text, setText]=useState("");
  useEffect(() => {
    console.log("useEffect called");
  },[text]);
  useEffect(()=>{
    setTimeout(()=>setCount(0),5000);
  },[]);

  console.log("Component rendering");

  return (
  <div>
    < DogPics/>
    <button onClick={()=>setCount((count)=>count +1)}>I have been clicked {count}</button>;
    <input type="text" placeholder="Type away..." value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>
  );
}

export default App;
