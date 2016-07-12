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

  robot.respond(/@[a-z]+/gi, addPoints);
  robot.respond(/@[a-z]+ -1/gi, subPoints);
  // robot.respond(/points/gi, printPointCount);

  // var numPoints = 0;
  var points = {};

  function addPoints(msg) {

    if(!points[userName]){
      points[userName] = 0;
    }
    points[userName] += numPoints;
    var message = userName + 'karma has increased to' + numPoints + 'points';
    msg.send(message);
  }

  function subPoints(userName, numPoints, msg) {
    if(!points[userName]){
      points[userName] = 0;
    }
    points[userName] -= numPoints;
    var message = userName + 'karma has increased to' + numPoints + 'points';
    msg.send(message);
  }

};
