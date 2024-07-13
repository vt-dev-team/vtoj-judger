import type { LoginUser } from "../models/LoginUser";

export default interface JudgerImpl {
    // 登录信息
    username: string;
    password: string;

    // 服务器设置
    backend: string;

    // 评测机设置
    duration: number;

    login(): boolean;
    nowUser(): LoginUser;
    askForJudge(): void;
}