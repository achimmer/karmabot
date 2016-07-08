// Commands:
//  hi - Hubot responds with "hello from hubot"
//  karmabot bye - karmabot responds with "goodbye from hubot"

module.exports = function(robot) {
// Hear -- Will detect any message
  robot.hear(/hi/i, function(msg) {
    msg.send("hello from hubot!");
  });
// Respond -- Will only detect if prefixed with robots name
  robot.respond(/bye/i, function(msg) {
    msg.send("goodbye from hubot!");
  });
};
