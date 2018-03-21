'use strict';

var Thermostat = function(){
  this._temperature = 20;
  this._minimumTemperature = 10;
};

Thermostat.prototype.temp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(number){
  this._temperature += number;
};
Thermostat.prototype.down = function(number){
  if ((this._temperature - number) < (this._minimumTemperature)){
    throw new Error('Minimum temperature is 10')
  };
  this._temperature -= number
};
