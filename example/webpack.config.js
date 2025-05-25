const HtmlWebpackPlugin = require("html-webpack-plugin");
const QRcodeWebpackPlugin = require("../dist/index.js");
const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./index.js"),
    devServer: {
        port: "8888",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
        }),
        new QRcodeWebpackPlugin(),
    ],
};
