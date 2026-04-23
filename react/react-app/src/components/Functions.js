export const getUnitLabels = (unitSystem) => {
  const isMetric = unitSystem === 'metric';
  return {
    temp: isMetric ? "°C" : "°F",
    humidity: "%",
    pressure: "hPa",
    speed: isMetric ? "m/s" : "mph",
    distance: isMetric ? "km" : "mi",
    UVI: "UV",
  };
};
export const isLastDayHour = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.getUTCHours() === 23;
};
export const isFirstDayHour = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.getHours() === 0;
};