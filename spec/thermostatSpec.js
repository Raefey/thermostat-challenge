'use strict';

describe('Thermostat:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it('starts at default temperature of 20',function(){
    expect(thermostat.temp()).toBe(20)
  });

  it('increases the temperature with .up', function(){
    thermostat.up(1);
    expect(thermostat.temp()).toBe(21);
  });
});
