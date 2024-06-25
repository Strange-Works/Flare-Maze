// src/Maze.tsx
import React from "react";

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

export default Maze;
