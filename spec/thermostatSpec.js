'use strict';

describe('Thermostat:', function(){
  var thermostat;
  var powerSaving;

  beforeEach(function(){
    thermostat = new Thermostat;
    powerSaving = new PowerSaving;
  });
  it('starts at default temperature of 20',function(){
    expect(thermostat.temp()).toBe(20)
  });

  it('increases the temperature with .up', function(){
    thermostat.up(1);
    expect(thermostat.temp()).toBe(21);
  });
  it('decreases the temperature with .down', function(){
    thermostat.down(1);
    expect(thermostat.temp()).toBe(19);
  });
  it('has a minimum temperature of 10', function(){
    thermostat.down(10);
    expect(function(){thermostat.down(1);}).toThrowError('Minimum temperature is 10')
  });
  describe("powersaving is on", function(){
    it('has a max temp of 25 when Powersaving is on', function(){
      spyOn(powerSaving,'isOn').and.returnValue(true)
      thermostat.up(5)
      expect(function(){thermostat.up(1);}).toThrowError('Cannot exceed Maximum Temperature');
    });
  });
  describe("powersaving is off", function(){
    it('has a max temp of 32 when Powersaving is off',function(){
      spyOn(powerSaving,'isOn').and.returnValue(false)
      console.log(powerSaving.isOn())
      thermostat.up(12)
      expect(function(){thermostat.up(1);}).toThrowError('Cannot exceed Maximum Temperature')
    });
  });
});
