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