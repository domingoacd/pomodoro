import { BASE_CONFIG, STORAGE_NAME, DEFAULT_TIMER } from "../constants";

export const fetchUserConfig = () => {
  const userConfig = localStorage.getItem(STORAGE_NAME) || BASE_CONFIG;
  return { ...userConfig };
};

export const getActiveTimerFromTimers = (timers) => {
  const activeTimer = timers.find((timer) => timer.active);
  return { ...activeTimer };
};

export const getInitialTime = () => {
  const config = fetchUserConfig();
  return `${config[DEFAULT_TIMER]}:00`
}

export const convertMinutesToMilliseconds = (minutes) => {
  return Number(minutes) * 60 * 1000; 
}

export const convertMillisecondsToMinutes = (milliseconds) => {
  return Number(milliseconds) / 60 / 1000; 
}