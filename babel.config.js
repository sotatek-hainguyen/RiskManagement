module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
        alias: {
          root: ['./'],
          // This needs to be mirrored in tsconfig.json
        },
      },
      // https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/
    ],
    'react-native-reanimated/plugin',
  ],
};
