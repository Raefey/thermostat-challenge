'use strict';

var Thermostat = function(){
  this._powerSaving = new PowerSaving();
  this._temperature = 20;
  this._minimumTemperature = 10;
};

Thermostat.prototype.temp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(number){
  if ((this._temperature + number) > (this.max())){
    throw new Error('Cannot exceed Maximum Temperature');
  };
    this._temperature += number
};

Thermostat.prototype.down = function(number){
  if ((this._temperature - number) < (this._minimumTemperature)){
    throw new Error('Minimum temperature is 10');
  };
  this._temperature -= number
};

Thermostat.prototype.max = function(){
  if (this._powerSaving.isOn()){
    console.log(this._powerSaving.isOn())
    return 25
  };
  return 32
}
