import React from "react";
import Header from "../../components/header/Header";
import CategoryNav from "../../components/nav/CategoryNav";
import Footer from "../../components/footer/Footer";
function Home() {
    return (
        <div>
            <Header />
            <CategoryNav />
            <div className="w-[100px] h-[1000px]"></div>
            <Footer/>
        </div>
    );
}

export default Home;
