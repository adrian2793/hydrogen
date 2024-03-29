export let bearer_token = "";
export let client_id = "";
export let broadcaster_id = "";
export let access_token = "";

export const schedule_api_options = {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer " + bearer_token,
    "Client-Id": client_id,
    "Content-Type": "application/json",
  },
};

export function schedule_api() {
  const request = new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=" + broadcaster_id + "&is_vacation_enabled=true&vacation_start_time=2025-10-01T00:00:00Z&vacation_end_time=2029-04-30T23:59:59Z&timezone=America/Los_Angeles", schedule_api_options);
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
