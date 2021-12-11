// px to rem
// https://github.com/cuth/postcss-pxtorem
//
module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 32,
      propList: ['*'],
      minPixelValue: 2,
      exclude: /node_modules/i,
    },
  },
};
