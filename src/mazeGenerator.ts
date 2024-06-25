// src/mazeGenerator.ts
function generateMaze(width: number, height: number): boolean[][] {
  const maze: boolean[][] = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );
  const stack: [number, number][] = [];
  const directions: [number, number][] = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];

  function isInBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < width && y < height;
  }

  function shuffle(array: [number, number][]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function carvePassagesFrom(x: number, y: number): void {
    maze[y][x] = true;
    shuffle(directions);

    for (const [dx, dy] of directions) {
      const nx = x + dx * 2;
      const ny = y + dy * 2;
      if (isInBounds(nx, ny) && !maze[ny][nx]) {
        maze[y + dy][x + dx] = true;
        carvePassagesFrom(nx, ny);
      }
    }
  }

  carvePassagesFrom(0, 0);
  return maze;
}

export default generateMaze;
