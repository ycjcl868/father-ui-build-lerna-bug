
export default [
  {
    cjs: 'babel',
  },
  {
    entry: 'ui/index.tsx',
    typescriptOpts: {
      check: false,
    },
    umd: {
      name: 'plugin-1',
      minFile: false,
    },
  },
];
