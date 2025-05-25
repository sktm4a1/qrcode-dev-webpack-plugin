import os from "os";
import qrcode from "qrcode-terminal";
import type { Compiler } from "webpack";

const pluginName = "QRcodeWebpackPlugin";

function getLocalIP() {
    const availableIPs: string[] = [];
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        if (interfaces[name]) {
            for (const iface of interfaces[name]) {
                if (iface.family === "IPv4" && !iface.internal) {
                    availableIPs.push(iface.address);
                }
            }
        }
    }

    return availableIPs;
}

interface Options {
    size: "small" | "large";
}

class QRcodeWebpackPlugin {
    options: Options = {
        size: "small",
    };

    constructor(options: Options) {
        options && (this.options = options);
    }

    apply(compiler: Compiler) {
        compiler.hooks.afterEmit.tap(pluginName, () => {
            if (compiler.options.mode === "development") {
                const localIP = getLocalIP()[0];
                const port =
                    (compiler.options.devServer &&
                        compiler.options.devServer.port) ||
                    8080;
                const protocol =
                    compiler.options.devServer &&
                    compiler.options.devServer.https
                        ? "https"
                        : "http";
                const url = `${protocol}://${localIP}:${port}`;

                console.log(
                    `\n Scan the QR code below to open the url(${url}) on your phone:\n`
                );

                qrcode.generate(url, {
                    small: this.options.size === "large" ? false : true,
                });
            }
        });
    }
}

export default QRcodeWebpackPlugin;
