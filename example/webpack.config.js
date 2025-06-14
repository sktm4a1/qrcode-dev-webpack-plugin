const path = require("path");
const QRcodeWebpackPlugin = require("qrcode-dev-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./index.js"),
    devServer: {
        port: "8888",
    },
    plugins: [new QRcodeWebpackPlugin()],
};
