// src/App.tsx

import React, { useState } from "react";
import generateMaze from "./mazeGenerator"; // Importing the maze generation function
import "./App.css"; // Importing styles for the App component

// Define props for the Maze component
type MazeProps = {
  maze: boolean[][]; // 2D array representing the maze (true for path, false for wall)
};

// Functional component for rendering the maze
const Maze: React.FC<MazeProps> = ({ maze }) => {
  return (
    <div className="maze">
      {maze.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${cell ? "path" : "wall"}`} // Conditionally apply CSS classes based on cell value
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  const mazeSize = 21; // Size of the maze (21x21 in this case)
  const [maze, setMaze] = useState<boolean[][]>( // State hook to manage maze data
    generateMaze(mazeSize, mazeSize) // Initialize maze using mazeGenerator function
  );

  // Function to generate a new maze
  const generateNewMaze = () => {
    setMaze(generateMaze(mazeSize, mazeSize)); // Update maze state with a new generated maze
  };

  // Render the App component
  return (
    <div className="App">
      <h1>Maze Generator</h1> {/* Heading for the application */}
      <button onClick={generateNewMaze}>Generate New Maze</button>{" "}
      {/* Button to trigger maze generation */}
      <div className="maze">
        <Maze maze={maze} />{" "}
        {/* Render the Maze component with current maze state */}
      </div>
      <footer>By Oliver Strange</footer> {/* Footer section */}
    </div>
  );
};

export default App; // Export the App component as default
