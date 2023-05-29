import { useEffect, useState } from 'react';

export default function Weather(props: any) {
  const [weatherData, setWeatherData] = useState([{}]);

  async function getWeatherData() {
    const url = 'https://localhost:7097/WeatherForecast';
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
    console.log(weatherData);
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Temperature C</td>
            <td>Temperature F</td>
            <td>Summary</td>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data) => (
            <tr key={Math.random()}>
              <td key={Math.random()}>{data.date}</td>
              <td key={Math.random()}>{data.temperatureC}</td>
              <td key={Math.random()}>{data.temperatureF}</td>
              <td key={Math.random()}>{data.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
