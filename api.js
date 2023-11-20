const schedule_api_options = {
  method: "PATCH",
  body: "{\"is_vacation_enabled\":true,\"vacation_start_time\":\"2022-10-01T00:00:00Z\",\"vacation_end_time\":\"2023-04-30T23:59:59Z\",\"timezone\":\"America/Los_Angeles\"}",
  headers: {
    "Authorization": "Bearer <token>",
    "Client-Id": "<client_id>",
    "Content-Type": "application/json",
  },
};

function schedule_api() {
  new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=123456", schedule_api_options);
}
