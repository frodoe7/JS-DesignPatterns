// Mediator Pattern
// ? it controls communication between objects , each object does not know info about the other one , this mediator handles all

var Participant = function(name) {
    this.name = name;
    this.chatroom = null;
  };
  
  Participant.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
      console.log(from.name + " to " + this.name + ": " + message);
    }
  };
  
  var Chatroom = function() {
    var participants = {};
  
    return {
      register: function(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
      },
  
      send: function(message, from, to) {
        if (to) {
          // single message
          to.receive(message, from);
        } else {
          // broadcast message
          for (key in participants) {
            if (participants[key] !== from) {
              participants[key].receive(message, from);
            }
          }
        }
      }
    };
  };

  