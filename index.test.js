const makeBabelConfig = require('./index');

describe('Basic tests', () => {
  it('Creates presets', () => {
    const config = makeBabelConfig();
    console.log(config.presets);
    expect(config.presets.length).toBe(2);
    expect(config.presets[0]).toBe('@babel/env');
    expect(config.presets[1]).toBe('@babel/react');
  }); 

  it('@babel/env preset has expected options', () => {});

  it('@babel/react preset has no options', () => {});

  it('Creates plugins', () => {});
});
