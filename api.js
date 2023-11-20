const http_headers = new Headers();
const patch_vacation_schedule_options = {
  method: "PATCH",
  headers: http_headers,
};

function set_headers(name, value) {
  http_headers.set(name, value);
}

function patch_vacation_schedule() {
  new Request("https://api.twitch.tv/helix/schedule/settings?broadcaster_id=123456", patch_vacation_schedule_options);
}
