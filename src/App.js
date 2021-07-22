import { useEffect, useState } from 'react';

function App() {
  const [countries, SetCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => SetCountries(data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <h1>Country name: {countries.length}</h1>
      {
        countries.map(country => <h4>{country.name}</h4>)
      }
    </div>
  );
}

export default App;
