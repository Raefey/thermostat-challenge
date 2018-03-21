'use strict';

decribe('Feature Test:', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it('thermostat starts at a default of 20',function(){
    expect(thermostat.temp).toBe(20)
  });
});
