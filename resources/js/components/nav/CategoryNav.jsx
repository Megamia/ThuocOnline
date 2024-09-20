import React from "react";
import "./CategoryNav.css"

function CategoryNav() {
    return (
        <div
            class="Category-Nav"
            className="w-[100%] bg-black h-12 justify-center flex"
        >
            <div class="Nav-Container" className="w-[80%] max-w-[1280px] h-[100%] bg-white flex gap-4 overflow-y-hidden">
                <div class="Nav-Item">
                    Kháng...
                    {/* <ul>
                        <li class="">Kháng sinh</li>
                        <li class="">Kháng virus</li>
                        <li class="">Kháng nấm</li>
                    </ul> */}
                </div>

                <div class="Nav-Item">Giảm đau</div>
                <div class="Nav-Item">Tiêu hóa</div>
                <div class="Nav-Item">Chống dị ứng</div>
                <div class="Nav-Item">Nội tiết</div>
                <div class="Nav-Item">Hô hấp</div>
                <div class="Nav-Item">Thần kinh</div>
                <div class="Nav-Item">Tim mạch</div>
                <div class="Nav-Item">Xương khớp</div>
                <div class="Nav-Item">Vitamin & Khoáng chất</div>
                <div class="Nav-Item">TP bảo vệ sức khỏe</div>
                <div class="Nav-Item">Mỹ phẩm</div>
                <div class="Nav-Item">Thiết bị y tế</div>
                <div class="Nav-Item">Thành phần khác</div>
            </div>
        </div>
    );
}

export default CategoryNav;
