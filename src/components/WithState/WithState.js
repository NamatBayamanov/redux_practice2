import { useState } from "react";

function WithState() {

  const [input, setInput] = useState([]);
  const [input2, setInput2] = useState([]);

  // const plus = () => setInput(input) + setInput2(input2);

  const [conclusion, setConclusion] = useState([]);

  const plus2 = () => setConclusion([...input]);

  return (
    <div className="WithState">
      <div>
        <input type="number"  />
        <input type="number" />
        <button onClick={plus2}>+</button>
      </div>
      <h2>
        {conclusion.map((currentValue, index, arr) => {
          return(
            <li>
              {index}
            </li>
          );
        })}
      </h2>
    </div>
  );
}

export default WithState;
