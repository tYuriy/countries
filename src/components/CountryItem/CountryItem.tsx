import { Country } from "../../types/Country"

type Props = {
  country: Country
}

export const CountryItem: React.FC<Props> = ({country}) => {
  const name = country.name
  const commonName = name.common
  const officialName = name.official
  const cca3 = country.cca3
  const languages = country.languages ? Object.values(country.languages) : [];
  const ccys = country.currencies ? Object.values(country.currencies) : [];
  const ccyCode = country.currencies ? Object.keys(country.currencies) : ["NA"];
  const flag = country.flags.svg;
  const map = country.maps.googleMaps
  // const map = country.maps.openStreetMaps
  console.log(map);
  
  const borderStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    padding: '10px'
  };

  return (
    <li>
      <p>{commonName} - {cca3} - {officialName}</p>
      {/* <ul>
        {languages.map(lang => (
          <li>{lang}</li>
        ))}
      </ul> */}
      <a href={map} target="blank">link</a>
      <img width='400px' src={flag} style={borderStyle} alt="" />
      <img id="mapImage" src={map} alt="OpenStreetMap" width="600" height="400"/>

      {/* <iframe
        width="600"
        height="450"
        // frameborder="0"
        // style="border:0"
        src={map}
        // allowfullscreen
      ></iframe> */}
      {/* <div id="map-container">
        <img src={map} alt="Google Map Image"/>
      </div> */}
      {/* <img width='400px' src= style={borderStyle} alt="" /> */}
      <ul>
        {ccys.map((ccy, index) => (
          <li>
            <p>{ccyCode[index]}: {ccys[index].name} - {ccys[index].symbol}</p>
            
          </li>
        ))}
      </ul>
      {/* <p>{country.name.common}</p> */}
    </li>
  )
}