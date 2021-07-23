import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Countries from "./components/Country/Countries";


function App() {
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState([]);


    useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[])
  

  const handleCountry = ((newCountry)=>{
    const countryDetail = [...country, newCountry];
    setCountry(countryDetail);
  })

  return (
    <div className="App">
    <h1>Country name: {countries.length}</h1>

    <h2>Added country: {country.length}</h2>
    <Cart country={country}></Cart>

      {
      countries.map(country => <Countries countryName={country} handleCountry={handleCountry} key={country.alpha3Code}/>)
      }
    </div>
  );
}

export default App;
