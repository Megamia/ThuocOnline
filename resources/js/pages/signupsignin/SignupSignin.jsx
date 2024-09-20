import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./SignUpSignIn.css";
import axios from "axios";

function SignUpSignIn() {

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const Login = async () => {
        console.log(`${process.env.REACT_APP_API_URL}/Login`);
        console.log(import.meta.env.APP_URL_API)
        try {
            const response = await axios.post(`${import.meta.env.APP_URL_API}`, {
                username:username,
                password:password
            });
            if (response.data.status === 1) {
                console.log("Login success");
            } else {
                console.log("Login faile");
            }
        } catch (e) {
            console.log("Error: ", e);
        }
    }
    return (
        <div class="SignUpSignIn">
            <Header />
            <div class="SignUpSignIn-Container">
                <div class="Box">
                    <div class="Format">
                        <h1>Đăng Nhập</h1>
                        <div class='Row'><span>Tài khoản</span><input class='text-input' value={username} onChange={(e) => setUsername(e.target.value)}></input></div>
                        <div class='Row'><span>Mật khẩu</span><input class='password-input' value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
                        <button onClick={Login}>Đăng Nhập</button>
                    </div>
                    <div class="Format">
                        <h1>Đăng Ký</h1>
                        <div class='Row'><span>Tài khoản</span><input class='text-input'></input></div>
                        <div class='Row'><span>Mật khẩu</span><input class='password-input'></input></div>
                        <div class='Row'><span>Họ và tên</span><input class='text-input'></input></div>
                        <div class='Row'><span>Số điện thoại</span><input class='text-input'></input></div>
                        <button>Đăng Ký</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUpSignIn;
