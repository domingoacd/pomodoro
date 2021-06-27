import { BASE_CONFIG, STORAGE_NAME } from "../constants";

export const fetchUserConfig = () => {
  const userConfig = localStorage.getItem(STORAGE_NAME) || BASE_CONFIG;
  return { ...userConfig };
};

export const getActiveTimerFromTimers = (timers) => {
  const activeTimer = timers.find((timer) => timer.active);
  return { ...activeTimer };
};
