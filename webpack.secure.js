const baseConfig = require("./webpack.config.js");
const config = baseConfig;
config.devServer.https = true;
module.exports = config;