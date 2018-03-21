'use strict';

describe('Feature Test:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it('Thermostat starts at a default of 20',function(){
    expect(thermostat.temp()).toBe(20)
  });

  it('Thermostat can increase temperature', function(){
    thermostat.up(1);
    expect(thermostat.temp()).toBe(21);
  });

  it('Thermostat can decrease temperature', function(){
    thermostat.down(1);
    expect(thermostat.temp()).toBe(19);
  });
  it('Thermostat has a minimum temperature of 10', function(){
    thermostat.down(10);
    expect(function(){thermostat.down(1);}).toThrowError('Minimum temperature is 10')
  });
});
