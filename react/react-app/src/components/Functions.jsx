export const getUnitLabels = (unitSystem) => {
  const isMetric = unitSystem === 'metric';
  return {
    temp: isMetric ? "°C" : "°F",
    humidity: "%",
    pressure: "hPa",
    speed: isMetric ? "m/s" : "mph",
    distance: isMetric ? "km" : "mi",
    UVI: "UV",
    pop: "%",
    precip: isMetric ? "mm/h" : "in/h",
  };
};
export const getDayName = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Helper to normalize dates to midnight for accurate comparison
  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  if (isSameDay(date, today)) {
    return "Today";
  } else if (isSameDay(date, tomorrow)) {
    return "Tomorrow";
  } else {
    // Returns full name (e.g., "Monday")
    return date.toLocaleDateString([], { weekday: 'long' });
  }
};
export const startOfDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  return Math.floor(startOfDay.getTime() / 1000);
}
export const endOfDay = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate());
  nextDay.setHours(23, 59, 59, 999);
  return Math.floor(nextDay.getTime() / 1000);
}
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
    // year: 'numeric'
  });
};
export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};