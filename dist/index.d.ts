import type { Compiler } from "webpack";
interface Options {
    size: "small" | "large";
}
declare class QRcodeWebpackPlugin {
    options: Options;
    constructor(options: Options);
    apply(compiler: Compiler): void;
}
export default QRcodeWebpackPlugin;
