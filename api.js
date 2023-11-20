const schedule_api_options = {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer <token>",
    "Client-Id": "<client_id>",
    "Content-Type": "application/json",
  },
};

function schedule_api() {
  new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=123456", schedule_api_options);
}
