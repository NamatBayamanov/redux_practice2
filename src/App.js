import Calculater from "./components/Calculater/Calculater";
import Computation from "./components/Computation/Computation";
import WithState from "./components/WithState/WithState";

function App() {
  return (
    <div className="App"> 
      <Calculater/>

      {/* <WithState/>
     */}

      <Computation/>
    </div>
  );
}

export default App;
