const obj = JSON.parse('{"object":"undefined", "panel_default_heading":"Coming Soon", "panel_default_content":"This panel needs some more details to be active on your channel"}');

window.Twitch.ext.onAuthorized((auth) => {
    console.log('got auth');
});
