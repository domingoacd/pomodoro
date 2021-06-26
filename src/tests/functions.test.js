import { BASE_CONFIG } from "../constants";
import { fetchUserConfig } from "../functions";

test("gets user config from localstorage", () => {
  expect(Object.keys(fetchUserConfig())).toEqual(Object.keys(BASE_CONFIG));
});
