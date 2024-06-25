// src/App.tsx
import React, { useState } from "react";
import generateMaze from "./mazeGenerator";
import "./App.css";

type MazeProps = {
  maze: boolean[][];
};

const Maze: React.FC<MazeProps> = ({ maze }) => {
  return (
    <div className="maze">
      {maze.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${cell ? "path" : "wall"}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [maze, setMaze] = useState<boolean[][]>(generateMaze(21, 21));

  const generateNewMaze = () => {
    setMaze(generateMaze(21, 21));
  };

  return (
    <div className="App">
      <h1>Maze Generator</h1>
      <button onClick={generateNewMaze}>Generate New Maze</button>
      <Maze maze={maze} />
    </div>
  );
};

export default App;
