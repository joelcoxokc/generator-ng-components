'use strict';
(function(){
  var <%= cameledName %> = function () {

    // Private variables
    var salutation = 'Hello';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  };

  angular
    .module('<%= scriptAppName %>')
    .provider('<%= cameledName %>', <%= cameledName %>);
}).call(this);