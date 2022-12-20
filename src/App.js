
import { useContext } from "react";

import "./components/Components.css";

import { DataContext } from "./components/context/data-context";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  const { arr, size } = useContext(DataContext);
  return (
    <div className="container">
      <div className="problem-container">
        <h3>Initial Maze</h3>
        <Problem arr={arr} size={size} />
      </div>
      <>
        <Solution />
      </>
    </div>
  );
}

export default App;
