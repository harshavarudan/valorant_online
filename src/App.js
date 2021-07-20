import './App.css';
import Button from 'react-bootstrap/Button'
import PlayerInfo from "./PlayerInfo";

function App() {


  return (
    <div className="App">
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="outline-danger" >Who der?</Button>
        <br/>
     <p1>
         <PlayerInfo/>
     </p1>

    </div>
  );
}

export default App;
