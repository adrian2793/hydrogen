export * from "./modules/api.js"
import * as api from "./modules/api.js";

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
  document.getElementById(id).innerHTML = object;
}

addEventListener("DOMContentLoaded", (event) => {
  encrypt("config_heading", "Settings");
  encrypt("config_developer_mode_toogle_label", "Developer Mode");
  encrypt("config_analytics_toogle_label", "Improve Hydrogen by sharing non person related usage analytics");
  encrypt("config_save_button", "config_save_button_content");
  
  encrypt("live_config_heading", "live_config_heading");
  encrypt("live_config_minimize_toogle_label", "live_config_minimize_toogle_label_content");
  
  encrypt("panel_heading", "Hydrogen");
  encrypt("panel_content", "Customize this panel as Streamer in the settings");
});

function authorizeUser() {
  var hash = location.hash;
  if(hash.includes("#access_token") === true) {
    encrypt("config_save_button", "config_save_button_content_saved");
    api.schedule();
    encrypt("config_save_button", "config_save_button_content");
  } else {
    window.location.assign("https://id.twitch.tv/oauth2/authorize?force_verify=false&response_type=token&client_id=xi3wenjaxnataoyim025umd3pnffz0&redirect_uri=https%3A//hydrogen-extension.netlify.app/live_config.html&scope=user%3Aread%3Aemail%20channel%3Amanage%3Aschedule");
    var hash = location.hash;
  }
}
