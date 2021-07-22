import { useEffect, useState } from 'react';
import Countries from "./components/Countries";


function App() {
  const [countries, setCountries] = useState([]);

    useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data)) 
    .catch(err => console.log(err))
  },[])
  
  return (
    <div className="App">
    <h1>Country name: {countries.length}</h1>
      {
      countries.map(country => <Countries countryName={country} key={country.alpha3Code}/>)
      }
    </div>
  );
}

export default App;
