const path = require("path");
const QRcodeWebpackPlugin = require("../dist/index.js");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./index.js"),
    devServer: {
        port: "8888",
    },
    plugins: [new QRcodeWebpackPlugin()],
};
