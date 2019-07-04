const makeBabelConfig = require('../index');

describe('makeBabelConfig', () => {
  it('includes react preset', () => {
    expect(makeBabelConfig().presets).toContain('@babel/react');
  });

  it('includes env preset', () => {
    expect(
      makeBabelConfig().presets.find(preset => preset.includes('@babel/env'))
    ).toBeTruthy();
  });

  it('includes class properties plugin', () => {
    expect(makeBabelConfig().plugins).toContain(
      '@babel/proposal-class-properties'
    );
  });
});
