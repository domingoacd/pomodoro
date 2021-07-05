export const STORAGE_NAME = "pomo_config";
export const DEFAULT_TIMER = "pomodoro";
export const BASE_CONFIG = Object.freeze({
  pomodoro: 1,
  short_break: 1,
  long_break: 15,
  color: "blue",
  font: "first",
});
export const TIMERS_INITIAL_STATE = [
  { id: "pomodoro", name: "pomodoro", active: true },
  { id: "short_break", name: "short break", active: false },
  { id: "long_break", name: "long break", active: false },
];

export const COLORS = ['blue', 'pink', 'green'];