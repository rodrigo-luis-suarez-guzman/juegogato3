import Square from "../Square/Square";
import './Board.css';

const Board = ({squares, onClick, turn, winningSquares}) => { // recibe el estado de los cuadrados a mostrar 

     const createSquares = values  => (
        values.map( value  => (
            <Square 
            winnir={winningSquares.includes(values)}
            turn={turn}
            onClick={() => onClick(value)}
            value={squares[value]}
            key={`square_${value}`}
            />
        ))
     );
     // voy a mapear la variable para utilizar nuestros elementos html

    return (
        <div className="board"> 
             <div className="row">
             {createSquares ([0,1,2])}
             </div>
             <div className="row">
             {createSquares ([3,4,5])}</div>   
             <div className="row">
             {createSquares ([6,7,8])}</div>         
     
        </div>         
    )
     // aqui va todo lo que rendiraza nuestro componeente
}

export default Board; // exportado nuestro componente 