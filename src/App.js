import './App.css';
import axios from 'axios';
import {useState} from 'react';
import QuoteCard from './components/QuoteCard';

const sampleQuote ={
  quote: "Shut up, brain. I got friends now. I don't need you anymore.",
  character: "Lisa Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
  characterDirection: "Right"
};


function App() {

  const [quote, setQuote] = useState(sampleQuote);

  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then((response) => response.data)
    .then((data) => {
      setQuote(data[0])
    })
  }
  

  return (
    <div className="App">
      <button type="button" onClick={getQuote}>Get Quote</button>
      <QuoteCard quote={quote}/>
    </div>
  );
}

export default App;
