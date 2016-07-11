// Description:
//   Karma point counter
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   karma @<name> +1  = adds 1 point to target names entry
//   karma @<name> -1 = subtracts 1 point from name
//   karma points = shows list of all user name points descending

module.exports = function(robot) {

  robot.respond(/achimmer +1/i, addPoints);
  robot.respond(/achimmer -1/i, subPoints);
  robot.respond(/points/i, printPointCount);

  var numPoints = 0;

  function addPoints(msg) {
    var message;
    message = 'achimmers karma has increased to 10 points';
    msg.send(message);
  }
};
