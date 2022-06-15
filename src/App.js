import './App.css';
import Button from './Components/Button';
import logoViva from './images/R.jpg';


function App() {

  const beginCounter = () => 
  {
    console.log("Begin");
  }

  const restartCounter = () =>
  {
    console.log("Restarting");
  }
  return (
    <div className="App">
      <div className='logo-container'>
          <img className='logo-viva' src={logoViva} alt='Logo de Viva'/>
      </div>
      <div className='counter-container'>
        <Button text='Click to begin' isButtonClick={true} manageClick={beginCounter}/>
        <Button text='Click to restart' isButtonClick={false} manageClick={restartCounter}/>
      </div>
    </div>
  );
}

export default App;
