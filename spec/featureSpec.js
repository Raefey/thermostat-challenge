'use strict';

describe('Feature Test:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it('thermostat starts at a default of 20',function(){
    expect(thermostat.temp()).toBe(20)
  });

  it('thermostat can increase temperature', function(){
    thermostat.up(1);
    expect(thermostat.temp()).toBe(21);
  });

  it('thermostat can decrease temperature', function(){
    thermostat.down(1);
    expect(thermostat.temp()).toBe(19);
  });
});
