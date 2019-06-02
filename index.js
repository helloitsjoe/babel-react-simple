const defaultPresets = [
  ['@babel/env', { targets: { node: 'current' } }],
  '@babel/react',
];
const defaultPlugins = ['@babel/proposal-class-properties'];
const makeBabelConfig = ({
  presets = defaultPresets,
  plugins = defaultPlugins,
} = {}) => {
  return {
    presets,
    plugins,
  };
};

module.exports = {
  makeBabelConfig,
  defaultPresets,
  defaultPlugins,
};
