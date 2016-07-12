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
  // rules:
  robot.hear(/@[a-z]+ [+-]/gi, parseMessage); // function for both add or minus points
  robot.hear(/karma total/gi, printPointCount); // function to return total points collected to users

  var points = {};

  function parseMessage(msg) {

    var re = /@([a-z]+) ([+-])/gi; // regex to pull out userName
    var matches = re.exec(msg.message.text); // regex applied and executes it in a capture group
    var userName = matches[1]; // grabs 2nd index in matches, which is username (without @)
    var direction = matches[2]; // grabs 3rd index in matches, which is + or - sign
    var numPoints = direction === '+' ? 1 : -1; // tern operator: if direction is + sign add 1 pt, else if - sign sub 1 pt.

    // if userName hasn't had any points, set at 0
    if(!points[userName]){
      points[userName] = 0;
    }

    // points object's property userName add point difference
    points[userName] += numPoints;

    // defines message: userName + points difference
    var message = userName + ' karma are at ' + points[userName] + ' points';
    msg.send(message);

  }

  function printPointCount(msg) {
    console.log(points);
    var message = points;
    msg.send(message);
  }

};
