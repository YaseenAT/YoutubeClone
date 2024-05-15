import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;

  const [y, sety] = useState(0);
  const ref = useRef(0);

  // not like this ref = 0 ; ref is object with current in it
  // ref = {current:0}

  // const i = useRef(null)
  let i = {
    current:null

  } ;
  useEffect(() => {
   i.current =  setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);

    return(()=>clearInterval(i.current))
  }, []);
  console.log("rendering...");

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <button
        className="bg-green-100 px-2 m-4"
        onClick={() => {
          x = x + 1;
          console.log("x = ", x);
        }}
      >
        Increase x
      </button>
      <span className="font-bold text-xl">Let = {x} </span>

      <button
        className="bg-green-100 px-2 m-4"
        onClick={() => {
          sety(y + 1);
        }}
      >
        Increase y
      </button>
      <span className="font-bold text-xl">state = {y} </span>

      <button
        className="bg-green-100 px-2 m-4"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref = " + ref.current);
        }}
      >
        Increase ref
      </button>
      <span className="font-bold text-xl">ref = {ref.current} </span>


      <button className="bg-red-500 p-2 m-2 text-center" onClick={()=>{clearInterval(i.current)}}>Stop Printing</button>
    </div>
  );
};

export default Demo2;
