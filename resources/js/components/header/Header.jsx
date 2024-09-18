import React from "react";
import "./Header.css";

function Header() {
    return (
        <div class="Header">
            <div class="Container">
                <div class="Logo">Thuoc So Online.COM</div>
                <div class="Nav"> Home, About, Contact</div>
                <div class="Login-Nav">
                    <div class="Login-Button">Đăng Nhập</div>
                    <div class="SignUp-Button">Đăng Ký</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
