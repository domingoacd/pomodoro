import { BASE_CONFIG } from "../constants";
import { fetchUserConfig, getActiveTimerFromTimers, getCurrentColorFromConfig } from "../functions";

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
