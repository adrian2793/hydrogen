const obj = JSON.parse('{"panel_default_heading":"Coming Soon", "age":30, "city":"New York"}');

var token = "";
var tuid = "";

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

function parse(id, object) {
  document.getElementById(id).innerHTML = obj.panel_default_heading;
}
