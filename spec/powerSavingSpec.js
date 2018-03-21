'use strict';

describe('PowerSaving:', function(){
  var powerSaving;

  beforeEach(function(){
    powerSaving = new PowerSaving;
  });

  it('is on by default', function(){
    expect(powerSaving.isOn()).toBe(true);
  });

  it('switches when .switch is called', function(){
    powerSaving.switch();
    expect(powerSaving.isOn()).toBe(false);
  });
});
