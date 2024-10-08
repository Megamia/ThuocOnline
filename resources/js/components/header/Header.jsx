import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div class="Header">
            <div class="Container">
                <div class="Logo">Thuoc So Online.COM</div>
                <div class="Nav"  > Home, About, Contact</div>
                <div class="Login-Nav">
                    <div class="Login-Button"  >Đăng Nhập</div>
                    <NavLink to="/SignUpSignIn" className="flex flex-1 bg-[#00FFFF]">
                        <div class="SignUp-Button">
                            Đăng Ký
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
