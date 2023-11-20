const obj = JSON.parse('{"object": "undefined", "panel_heading": "Hydrogen", "panel_content": "Customize this panel as Streamer in the settings", "live_config_heading": "Live Settings", "config_developer_mode_toogle_label_content": "&nbsp;&nbsp;Enable Developer Mode", "config_analytics_toogle_label_content": "&nbsp;&nbsp;Enable Analytics", "config_heading": "Settings"}');

encrypt("config_heading", "config_heading");
encrypt("config_developer_mode_toogle_label", "config_developer_mode_toogle_label_content");
encrypt("config_analytics_toogle_label", "config_analytics_toogle_label_content");

var twitch = window.Twitch.ext;

function setAuth(token) {
  Object.keys(requests).forEach((req) => {
    twitch.rig.log('Setting auth headers');
    requests[req].headers = { 'Authorization': 'Bearer ' + token }
  });
}

twitch.onContext(function(context) {
  twitch.rig.log(context);
});

twitch.onAuthorized(function(auth) {
  token = auth.token;
  tuid = auth.userId;
  setAuth(token);
});

function encrypt(id, object) {
  document.getElementById(id).innerHTML = obj[object];
}
