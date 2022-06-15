import './App.css';
import Button from './Components/Button';
import logoViva from './images/R.jpg';
import ClickCounter from './Components/Counter';
import {useState} from 'react';


function App() {

  const beginCounter = () => 
  {
    setNumClicks(numClicks + 1);
  }

  const [numClicks, setNumClicks] = useState(0);

  const restartCounter = () =>
  {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='logo-container'>
          <img className='logo-viva' src={logoViva} alt='Logo de Viva'/>
      </div>
      
      <div className='counter-container'>
        <ClickCounter numClicks={numClicks}/>
        <Button text='Click to begin' isButtonClick={true} manageClick={beginCounter}/>
        <Button text='Click to restart' isButtonClick={false} manageClick={restartCounter}/>
      </div>
    </div>
  );
}

export default App;
