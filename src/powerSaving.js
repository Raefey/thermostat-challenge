'use strict';

var PowerSaving = function(){
  this._mode = true
};

PowerSaving.prototype.isOn = function(){
  return this._mode;
};

PowerSaving.prototype.switch = function(){
  if (this._mode  === true){
    this._mode = false;
  }
  else {
    this._mode = true;
  };
};
