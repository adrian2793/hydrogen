const schedule_api_options = {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer <token>",
    "Client-Id": "<client_id>",
    "Content-Type": "application/json",
  },
};

function set_headers(name, value) {
  http_headers.set(name, value);
}

function patch_vacation_schedule() {
  new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=123456", patch_vacation_schedule_options);
}
