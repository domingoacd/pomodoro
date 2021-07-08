import { BASE_CONFIG, STORAGE_NAME, DEFAULT_TIMER } from "../constants";
import pomodoroSound from '../assets/pomodoro.wav'
import restSound from '../assets/rest.mp3';

export const fetchUserConfig = () => {
  const userConfig = JSON.parse(localStorage.getItem(STORAGE_NAME)) || BASE_CONFIG;
  return { ...userConfig };
};

export const saveUserConfig = (userConfig) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(userConfig));
}

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

export const playNotification = (timerId) => {
  const audio = new Audio(timerId === 'pomodoro' ? pomodoroSound : restSound);
  audio.play();
}

