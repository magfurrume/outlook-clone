import React from "react";
import { GoChecklist } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBulb } from "react-icons/sl";
import { FiMinus } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";




const HeaderTop = () => {
    const headerStyle = {
        backgroundColor: "#0F6CBD",
        padding: ".7rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'fixed',
        top: "0",
        width: "100%"
    };

    const inputStyle = {
        position: "relative",
    };

    const searchIconStyle = {
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
    };
    const searchBarStyle = {
        paddingLeft: '40px'
    }

    return (
        <header style={headerStyle}>
            {/* Left Section - Outlook Text */}
            <div className="col-2 d-flex align-items-center">
                <span className="ms-3 h5 text-light">Outlook</span>
            </div>

            {/* Center Section - Search Bar */}
            <div className="col-2" style={inputStyle}>
                <div style={searchIconStyle}>
                    <IoSearchOutline />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    onChange={(e) => console.log(e.target.value)}
                    style={searchBarStyle}
                />
            </div>

            {/* Right Section - User Name and Icon */}
            <div className="col-8 d-flex justify-content-end align-items-center header-top-icon">
                <a href="/#" className="text-light"><GoChecklist /></a>
                <a href="/#" className="text-light ms-4"><IoIosNotificationsOutline /></a>
                <a href="/#" className="text-light ms-4"><IoSettingsOutline /></a>
                <a href="/#" className="text-light ms-4"><SlBulb /></a>
                <a href="/#" className="text-light ms-4"><FiMinus /></a>
                <a href="/#" className="text-light ms-4"><MdContentCopy /></a>
                <a href="/#" className="text-light ms-4"><RxCross2 /></a>
            </div>
        </header>
    );
};

export default HeaderTop;
