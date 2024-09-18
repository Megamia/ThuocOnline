import React from "react";
import Header from "../../components/header/Header";
import "./SignUpSignIn.css";
function SignUpSignIn() {
    return (
        <div class="SignUpSignIn">
            <Header />
            <div class="SignUpSignIn-Container">
                <div class="Box">
                    <div class="Format">
                        <h1>Đăng Nhập</h1>
                        <div class='Row'><span>Tài khoản</span><input class='text-input'></input></div>
                        <div class='Row'><span>Mật khẩu</span><input class='password-input'></input></div>
                        <button>Đăng Nhập</button>
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
