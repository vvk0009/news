export const fetchWeather = async (cityName) => {
  const response =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${cityName}&aqi=yes
    `);
  const data = await response.json();
  return data;
};
