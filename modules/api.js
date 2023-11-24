export let bearer_token = "cr9ysmcjl1alq8w9xks87cpurrc67u";
export let client_id = "94mse963yladye0qb4qcwrbadbhckc";
export let broadcaster_id = "816761143";
export let access_token = "9efw9pr815y5yougudivi04bj8dk7p";

export const schedule_api_options = {
  method: "PATCH",
  body: '{"is_vacation_enabled":true,"vacation_start_time":"2025-10-01T00:00:00Z","vacation_end_time":"2029-04-30T23:59:59Z","timezone":"America/Los_Angeles"}',
  headers: {
    "Authorization": "Bearer " + bearer_token,
    "Client-Id": client_id,
    "Content-Type": "application/json",
    "is_vacation_enabled": "true",
    "vacation_start_time": "2024-05-16T00:00:00Z",
    "vacation_end_time": "2025-05-16T00:00:00Z",
    "timezone": "America/New_York",
  },
};

export function schedule_api() {
  const request = new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=" + broadcaster_id, schedule_api_options);
  fetch(request)
  .then((response) => {
    if (response.status === 200) {
      alert(response.json);
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
}
