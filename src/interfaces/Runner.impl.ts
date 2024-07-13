/**
 * 程序运行器的接口定义
 * @param {string} inputFile 程序输入文件名
 * @param {string} outputFile 程序输出文件名
 * @param {string} command 程序运行命令
 * @param {number} timeLimit 程序运行时间限制，单位为毫秒
 * @param {number} memoryLimit 程序运行内存限制，单位为MB
 * @param {number} outputLimit 程序运行输出限制
 */
export default interface RunnerImpl {
    inputFile: string;
    outputFile: string;
    command: string;

    timeLimit: number;
    memoryLimit: number;
    outputLimit: number;

    run(): number;
}