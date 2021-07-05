import { BASE_CONFIG } from "../constants";
import {
  convertMinutesToMilliseconds,
  fetchUserConfig,
  getActiveTimerFromTimers,
  convertMillisecondsToMinutes,
  getInitialTime
} from "../functions";

test("gets user config from localstorage", () => {
  expect(Object.keys(fetchUserConfig())).toEqual(Object.keys(BASE_CONFIG));
});

test("gets active timer", () => {
  const timers = [
    { id: "pomodoro", name: "pomodoro", active: false },
    { id: "short_break", name: "short break", active: true },
    { id: "long_break", name: "long break", active: false },
  ];

  expect(getActiveTimerFromTimers(timers)).toEqual(timers[1]);
});

test("converts minutes to milliseconds", () => {
  const minutes = 25;
  expect(convertMinutesToMilliseconds(minutes)).toBe(1500000);
});

test("converts milliseconds to minutes", () => {
  const milliseconds = 1500000; 
  expect(convertMillisecondsToMinutes(milliseconds)).toBe(25);
});

test("gets timer initial time", () => {
  expect(getInitialTime()).toBe('25:00');
});
