import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Computation() {
  const computation = useSelector((store) => {
    return store.computation.number;
  });

  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0);

  const plus = +input + +input2;
  const minus = +input - +input2;
  const multiplication = +input * +input2;
  const devide = +input / +input2;

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{computation}</h2>
      <input
        type="number"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <input
        type="number"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <div>
        <button
          onClick={() =>
            dispatch({ type: "computation/increment", payload: plus })
          }
        >
          +
        </button>

        <button
          onClick={() =>
            dispatch({ type: "computation/decrement", payload: minus })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({ type: "computation/decrement", payload: multiplication })
          }
        >
          *
        </button>
        <button
          onClick={() =>
            dispatch({ type: "computation/decrement", payload: devide })
          }
        >
          /
        </button>
      </div>
    </div>
  );
}

export default Computation;
