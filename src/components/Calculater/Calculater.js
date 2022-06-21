import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SetValueCalculater from "./SetValueCalculater/SetValueCalculater";



function Calculater() {

  const number = useSelector((store) => {
    return store.counter.number;
  });

  const dispatch = useDispatch();

  return (
    <div className="Calculater">
      <h2>
        {number}
      </h2>
      <div>
        <button onClick={() => dispatch( { type: `counter/increment`, } )}>
          +
        </button>
        <button onClick={() => dispatch( { type: `counter/decrement`, } )}>
          -
        </button>
        <button onClick={() => dispatch( { type: `counter/reset`, } )}>
          reset
        </button>
      </div>
      <SetValueCalculater/>
    </div>
  );
}

export default Calculater;
