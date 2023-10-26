// import { type } from 'os';
import './App.css';
import { Main } from './components/Main';
import { Test } from './components/Test';
import { useEffect, useState } from 'react';
import { Country } from './types/Country';

const BASE_URL = 'https://restcountries.com/v3.1/all';

export function App() {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries =async () => {
      const response = await fetch(`${BASE_URL}`);
      const counties = await response.json() as Country[];
      setCountries(counties);
    }

    fetchCountries();
  }, [])

  return (
    <div className="App">
      <Main/>
      <Test countries={countries}/>
    </div>
  );
}

// export default App;
