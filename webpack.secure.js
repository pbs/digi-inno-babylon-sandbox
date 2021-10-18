const baseConfig = require("./webpack.config.js");
const config = baseConfig;
config.devServer.host = "0.0.0.0";
config.devServer.https = true;
module.exports = config;