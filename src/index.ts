

type State = 'alive' | 'dead';
interface Cell {
  state: State;
  i: number;
  j: number;
  nbr1: Nbr;
  nbr2: Nbr;
  nbr3: Nbr;
  nbr4: Nbr;
  nbr5: Nbr;
  nbr6: Nbr;
  nbr7: Nbr;
  nbr8: Nbr;
}
type Nbr = Cell | undefined;;
type Board = Cell[][];

function generateRandomInput(rows: number, cols: number): number[][] {
  const res: number[][] = []
  for(let i = 0; i < rows; i++) {
    const row = [];
    for(let j = 0; j < cols; j++) {
      row.push(Math.random() > 0.5 ? 1 : 0);
    }
    res.push(row);
  }
  return res;
}


let input: number[][] = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
input = generateRandomInput(20, 40);
const rows = input.length;
const cols = input[0].length;
const interval = 150; // ms

function createBoard(input: number[][], rows: number, cols: number): Board {
  const board: Board = [];
  for(let i = 0; i < rows; i++) {
    const cellRow: Cell[] = [];
    for(let j = 0; j < cols; j++) {
      const cell: Cell = {
        state: Boolean(input[i][j]) ? 'alive' : 'dead',
        i,
        j,
        nbr1: undefined,
        nbr2: undefined,
        nbr3: undefined,
        nbr4: undefined,
        nbr5: undefined,
        nbr6: undefined,
        nbr7: undefined,
        nbr8: undefined,
      };
      cellRow.push(cell);
    }
    board.push(cellRow);
  }
  return board;
}

function wireCells(board: Board, rows: number, cols: number): void {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      board[i][j].nbr1 = board[i-1]?.[j-1];
      board[i][j].nbr2 = board[i-1]?.[j];
      board[i][j].nbr3 = board[i-1]?.[j+1];
      board[i][j].nbr4 = board[i]?.[j-1];
      board[i][j].nbr5 = board[i]?.[j+1];
      board[i][j].nbr6 = board[i+1]?.[j-1];
      board[i][j].nbr7 = board[i+1]?.[j];
      board[i][j].nbr8 = board[i+1]?.[j+1];
    }
  }
}

function printBoard(board: Board, rows: number, cols: number) {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      const state = board[i][j].state;
      const c = state === 'alive' ? 'O' : '.';
      process.stdout.write(` ${c} `);
    }
    process.stdout.write('\n');
  }
  process.stdout.write('\n');
}

function nextGeneration(board: Board, rows: number, cols: number): Board {
  const newBoard: Board = structuredClone(board);
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      newBoard[i][j].state = getNextState(board[i][j]); // remember: pass old board cell to getNextState() function
    }
  }
  return newBoard;
}

function getNrbs(cell: Cell): Cell[] {
  let nrbs: (Cell | undefined)[] = [
    cell.nbr1,
    cell.nbr2,
    cell.nbr3,
    cell.nbr4,
    cell.nbr5,
    cell.nbr6,
    cell.nbr7,
    cell.nbr8,
  ];
  const res: Cell[] = nrbs.filter(n => n) as Cell[];
  return res;
}

function getNbrsCount(cell: Cell, state: State): number {
  const allNrbs: Cell[] = getNrbs(cell);
  switch(state) {
    case undefined: {
      return allNrbs.length;
    }
    case 'alive': {
      const aliveNrbs: Cell[] = allNrbs.filter(n => n.state === 'alive');
      return aliveNrbs.length;
    }
    case 'dead': {
      const deadNrbs: Cell[] = allNrbs.filter(n => n.state === 'dead');
      return deadNrbs.length;
    }
    default: throw new Error("unreachable");
  }
}

function getNextState(cell: Cell): State {
  const nbrsCount = getNbrsCount(cell, 'alive');
  switch(cell.state) {
    case 'alive': {
      if (nbrsCount < 2 || nbrsCount >= 4) {
        return 'dead';
      } else if(nbrsCount < 4) {
        return 'alive';
      }
    } break;
    case 'dead': {
      if(nbrsCount === 3) {
        return 'alive';
      } else {
        return 'dead';
      }
    }
    default: throw new Error("unreachable");
  }
  throw new Error("unreachable");
}

function refreshScreen(initialBoard: Board, rows: number, cols: number) {
  let board = initialBoard;
  setInterval(() => {
    board = nextGeneration(board, rows, cols);
    printBoard(board, rows, cols);
  }, interval);
}

function main() {
  let board: Board = createBoard(input, rows, cols);
  wireCells(board, rows, cols);
  printBoard(board, rows, cols);
  refreshScreen(board, rows, cols);
}
main();



