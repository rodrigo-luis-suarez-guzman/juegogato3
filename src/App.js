import  { useState} from 'react' // lo usamos para crear el estado de nuestra aplicacion
import './App.css';
import Board from './components/Board/Board';


const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];




const  App = () => { 
  const [turn, setTurn] = useState('X'); // se crea una constante con 2 valores que son los valores de nuestro estados
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    0: 0,
  }); 

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

 
  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }


  const handleClick = square => {
    let newSquare = [...squares]; // estamos asignando al estado una  nueva variable para modificarlaa
    newSquare.splice (square, 1, turn);
    setSquares(newSquare);
    checkForWinner (newSquare);
  }

  // Estado Base de nuestra Aplicacion 

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  return (
    
    <div className="container">
        <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
   
    </div>
  );
} 

export default App;
