import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/Helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme,setIsDarkTheme] = useState(false);
  // console.log("rendering...");

  // everytime we r changing theme by toggke button primeno calculation is happening which is heavy operation

  // const prime =()=>{ ;console.log("calcualte prime no of " ,text) ;return findNthPrime(text)};
 

  const prime = useMemo(()=>findNthPrime(text),[text])
console.log(prime)

  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black "+ (isDarkTheme && "bg-black text-white")} >
    <div>
      <button onClick={()=>setIsDarkTheme(!isDarkTheme)} className="bg-green-200 m-2 p-2">Toggle</button>
    </div>
      <div>
        <input
          className={`border border-black px-2 ${isDarkTheme ? 'text-black' : 'text-black'}`}
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1>nth prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
