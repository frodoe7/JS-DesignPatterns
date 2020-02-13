// Observer Pattern
// ? it maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

var Subject = function() {
    let observers = [];
  
    return {
      subscribeObserver: function(observer) {
        observers.push(observer);
      },
      unsubscribeObserver: function(observer) {
        var index = observers.indexOf(observer);
        if(index > -1) {
          observers.splice(index, 1);
        }
      },
      notifyObserver: function(observer) {
        var index = observers.indexOf(observer);
        if(index > -1) {
          observers[index].notify(index);
        }
      },
      notifyAllObservers: function() {
        for(var i = 0; i < observers.length; i++){
          observers[i].notify(i);
        };
      }
    };
  };
  
  var Observer = function(number) {
    return {
      notify: function() {
        console.log("Observer " + number + " is notified!");
      }
    }
  }
  
module.exports = {Observer,Subject};