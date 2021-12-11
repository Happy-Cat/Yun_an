// vue.config.js
const { version } = require('./package.json');

let publicPath = '/';
let outputDir = 'dist';
// 静态文件部署到微软BLOB上
if (process.env.DEPLOY_IN_CDN) {
  // publicPath
  const PREV_BASE_URL = 'https://defiresource.blob.core.windows.net/www';
  publicPath = process.env.NODE_ENV === 'production' ? `${PREV_BASE_URL}/${version}/` : '/';
  outputDir = `dist/${version}`;
}
process.env.BASE_URL = publicPath;

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  publicPath,
  outputDir,
  productionSourceMap: false,
  assetsDir: 'static',
  devServer: {
    port: 7030,
    host: '0.0.0.0',
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境删除调试信息
      config.optimization.minimizer('terser').tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].terserOptions.compress.drop_debugger = true;
        // 只删除console.log、console.debug，保留console.info,console.warn,console.error
        // args[0].terserOptions.compress.drop_console = true;
        // eslint-disable-next-line no-param-reassign
        args[0].terserOptions.compress.pure_funcs = ['console.log', 'console.debug'];
        return args;
      });
      // 压缩
      config.plugin('html').tap((args) => {
        if (process.env.NODE_ENV === 'production') {
          // 压缩html模板里面script脚本换行
          // 详细见：
          // https://github.com/jantimon/html-webpack-plugin
          // https://github.com/DanielRuf/html-minifier-terser
          // eslint-disable-next-line no-param-reassign
          args[0].minify.minifyJS = true;
          // eslint-disable-next-line no-param-reassign
          args[0].minify.minifyCSS = true;
        }
        return args;
      });
    }
    // If there're dependencies installed by npm link or yarn link,
    // ESLint(and sometimes Babel as well) may not work properly for those symlinked dependencies.
    // It is because webpack resolves symlinks to their real locations by default,
    // thus breaks ESLint / Babel config lookup
    // https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
    // https://webpack.js.org/configuration/resolve/#resolvesymlinks
    config.resolve.symlinks(false);
  },
};
