import { BASE_CONFIG, STORAGE_NAME, DEFAULT_TIMER } from "../constants";
import pomodoroSound from "../assets/pomodoro.wav";
import restSound from "../assets/rest.mp3";

/**
 * Fetchs the user configuration from local storage, or, from @see /constants/BASE_CONFIG if the
 * storage is empty
 * @returns {Object} The current user configuration
 */
export const fetchUserConfig = () => {
  const userConfig =
    JSON.parse(localStorage.getItem(STORAGE_NAME)) || BASE_CONFIG;
  return { ...userConfig };
};

/**
 * Saves the current user configuration n local storage
 * @param {Object} userConfig - An object with the current user configuration. @see /constants/BASE_CONFIG as a reference
 */
export const saveUserConfig = (userConfig) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(userConfig));
};

/**
 * Returns the timer with status active from an array of timers
 * @param {Array} timers -  The array containing the list of timers
 * @returns {Object} The timer with property active = true
 */
export const getActiveTimerFromTimers = (timers) => {
  const activeTimer = timers.find((timer) => timer.active);
  return { ...activeTimer };
};

/**
 * Gets the time from the the default timer @see /constants/DEFAULT_TIMER to be displayed on screen
 * when loading the app for the first time
 * @returns {String} The initial time to be displayed in format MM:SS
 */
export const getInitialTime = () => {
  const config = fetchUserConfig();
  return `${config[DEFAULT_TIMER]}:00`;
};

/**
 *
 * @param {String | Number} minutes - The minutes to be converted
 * @returns {Number} The milliseconds equivalent to the minutes
 */
export const convertMinutesToMilliseconds = (minutes) => {
  return Number(minutes) * 60 * 1000;
};

/**
 *
 * @param {String | Number} milliseconds - The milliseconds to be converted
 * @returns {Number} The minutes equivalent to the milliseconds
 */
export const convertMillisecondsToMinutes = (milliseconds) => {
  return Number(milliseconds) / 60 / 1000;
};

/**
 * Plays an audio according to the timers id, @see /constants/TIMERS_INITIAL_STATE to check all the ids
 * @param {String} timerId - The id of the timer to use to play the sound
 */
export const playNotification = (timerId) => {
  const audio = new Audio(timerId === "pomodoro" ? pomodoroSound : restSound);
  audio.play();
};
