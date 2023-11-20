const obj = JSON.parse('{"object": "undefined", "panel_heading": "Hydrogen", "panel_content": "Customize this panel as Streamer in the settings", "live_config_heading": "Live Settings", "config_developer_mode_toogle_label_content": "&nbsp;&nbsp;Enable Developer Mode", "config_analytics_toogle_label_content": "&nbsp;&nbsp;Enable Analytics", "config_heading": "Settings"}');

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

addEventListener("DOMContentLoaded", (event) => {
  encrypt("config_heading", "config_heading");
  encrypt("config_developer_mode_toogle_label", "config_developer_mode_toogle_label_content");
  encrypt("config_analytics_toogle_label", "config_analytics_toogle_label_content");
  encrypt("live_config_heading", "live_config_heading");
  encrypt("live_config_minimize_toogle_label", "live_config_minimize_toogle_label_content");
  encrypt("panel_heading", "panel_heading");
  encrypt("panel_content", "panel_content");
});

function authorizeUser() {
  window.open("https://id.twitch.tv/oauth2/authorize?force_verify=true&response_type=token&client_id=94mse963yladye0qb4qcwrbadbhckc&redirect_uri=http%3A//hydrogen-extension.netlify.app/config.html&scope=user%3Aread%3Aemail");
  setTimeout(function(){
    var req = new XMLHttpRequest();
    req.open('GET', document.location, true);
    req.send(null);
    req.onload = function() {
      var headers = req.getAllResponseHeaders().toLowerCase();
      alert(headers);
    };
  }, 10000);
}

authorizeUser();
