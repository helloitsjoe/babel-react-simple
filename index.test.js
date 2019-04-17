const { defaultPresets, defaultPlugins, makeBabelConfig } = require('./index');

describe('Babel config', () => {
  it('has default presets', () => {
    const config = makeBabelConfig();
    expect(config.presets).toEqual(defaultPresets);
    expect(config.presets).toMatchInlineSnapshot(`
      Array [
        Array [
          "@babel/env",
          Object {
            "targets": Object {
              "node": "current",
            },
          },
        ],
        "@babel/react",
      ]
    `);
  });

  it('has default plugins', () => {
    const config = makeBabelConfig();
    expect(config.plugins).toEqual(defaultPlugins);
    expect(config.plugins).toMatchInlineSnapshot(`
      Array [
        "@babel/proposal-class-properties",
      ]
    `);
  });

  it('user can overwrite presets', () => {
    const customPresets = ['fake-preset'];
    const config = makeBabelConfig({ presets: customPresets });
    expect(config.presets).toEqual(customPresets);
    expect(config.plugins).toEqual(defaultPlugins);
  });

  it('user can overwrite plugins', () => {
    const customPlugins = ['fake-plugin'];
    const config = makeBabelConfig({ plugins: customPlugins });
    expect(config.presets).toEqual(defaultPresets);
    expect(config.plugins).toEqual(customPlugins);
  });

  it('user can merge presets', () => {
    const presets = [...defaultPresets, 'fake-preset'];
    const config = makeBabelConfig({ presets });
    expect(config.presets).toEqual(presets);
    expect(config.plugins).toEqual(defaultPlugins);
  });

  it('user can merge plugins', () => {
    const plugins = [...defaultPlugins, 'fake-plugin'];
    const config = makeBabelConfig({ plugins });
    expect(config.plugins).toEqual(plugins);
    expect(config.presets).toEqual(defaultPresets);
  });
});
