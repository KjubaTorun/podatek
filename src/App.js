import './App.css';
import React,{useState} from 'react'
import Result from './components/Result';
import ClickedButton from './components/ClickedButton';
import InputForm from './components/InputForm';

function App() {
  
  const [brutto, setBrutto] = useState('');
  const [podatek, setPodatek] = useState(18);
  const [netto, setNetto] = useState('');

  function handleInputChange(e){
      const {name, value} = e.target
      name === 'brutto' ? setBrutto(value) : setPodatek(parseInt(value));
    }

  function handleButtonClick(){
    const netto = (brutto *(1 - podatek / 100)).toFixed(2);
    setNetto(netto);
  }


  return (
    <div className="App">
      <h1>Kalkulator wypłaty</h1>
      <InputForm handleInputChange={handleInputChange}/>
      <ClickedButton handleButtonClick={handleButtonClick}/>
      <Result netto={netto} />
    </div>
  );
}

export default App;
