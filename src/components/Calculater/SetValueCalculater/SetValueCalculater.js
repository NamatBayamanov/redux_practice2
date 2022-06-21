import { useState } from "react";
import {useDispatch} from "react-redux";
function SetValueCalculater() {

  const [input, setInput] = useState(0);

  const dispatch = useDispatch();
  return (
    <div>
      <input type="number" value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => dispatch( { type: "counter/set", payload: +input, } )}>Set</button>
    </div>
  );
}

export default SetValueCalculater;
