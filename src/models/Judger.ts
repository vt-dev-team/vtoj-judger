import JudgerImpl from "../interfaces/Judger.impl";
import axios from 'axios';
import { sha256 } from "js-sha256";
import { LoginUser } from "./LoginUser";

axios.defaults.withCredentials = true;

export default class Judger implements JudgerImpl {
    username: string;
    password: string;
    backend: string;
    duration: number;
    loginUser?: LoginUser;
    constructor(username: string, password: string, backend: string, duration: number) {
        this.username = username;
        this.password = password;
        this.backend = backend;
        this.duration = duration;
    }
    login(): boolean {
        let passwordHash = this.password;
        for (let i = 0; i < 100; i++) {
            passwordHash = sha256(passwordHash);
        }
        axios.post(this.backend + '/api/user/login', {
            auth: this.username,
            password: this.password
        }).then((res) => {
            if (res.data.status === 'success') {
                this.loginUser = res.data.user;
                return true;
            } else {
                return false;
            }
        }).catch((err) => {
            // console.log(err);
            return false;
        });
        return false
    }
    nowUser() {
        return this.loginUser;
    }
    askForJudge() {
        if (!this.loginUser) {

        }
        
    }
}