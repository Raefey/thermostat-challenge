'use strict';

var Thermostat = function(){
  this._temperature = 20;
};

Thermostat.prototype.temp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(number){
  this._temperature += number;
};
Thermostat.prototype.down = function(number){
  this._temperature -= number;
};
