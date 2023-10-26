import { Country } from '../../types/Country'
import { CountryItem } from '../CountryItem/CountryItem';

type Props = {
  countries: Country[],
}

export const Test: React.FC<Props> = ({ countries }) => {
  // console.log(countries);
  return (
    <ul>
      {countries.slice(8,10).map(country => {
        // const lang = country.languages
        return (
          <CountryItem key={country.cca3} country={country}/>
      )})}
    </ul>
  )
}