const obj = JSON.parse('{"object": "null", "panel_default_heading": "Hydrogen", "panel_default_content": "Customize this panel as Streamer in the settings", "live_config_default_heading": "Live Settings", "live_config_developer_mode_toogle_label_content": "&nbsp;&nbsp;Enable Developer Mode", "live_config_analytics_toogle_label": "&nbsp;&nbsp;Enable Analytics"}');

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
  document.getElementById(id).innerText = obj[object];
}
