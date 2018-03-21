'use strict';

describe('Thermostat:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it('starts at default temperature of 20',function(){
    expect(thermostat.temp()).toBe(20)
  });
});
