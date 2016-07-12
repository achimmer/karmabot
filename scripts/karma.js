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
//   karma @<name> +  = adds 1 point to target names entry
//   karma @<name> - = subtracts 1 point from name
//   karma points = shows list of all user name points descending

module.exports = function(robot) {

  robot.hear(/@[a-z]+ [+-]/gi, parseMessage); // rule
  // robot.respond(/@[a-z]+ -1/gi, subPoints);
  // robot.respond(/points/gi, printPointCount);

  // var numPoints = 0;
  var points = {};

  function parseMessage(msg) {
    // console.log('msg', msg.message.text);

    // pull out userName
    var re = /@([a-z]+) ([+-])/gi;
    var matches = re.exec(msg.message.text);
    var userName = matches[1];
    var direction = matches[2];
    var numPoints = direction === '+' ? 1 : -1;

    if(!points[userName]){
      points[userName] = 0;
    }

    points[userName] += numPoints;

    var message = userName + ' karma are at ' + points[userName] + ' points';
    msg.send(message);

    // console.log('matches is', matches);
  }

};
