import React, { useState, useEffect } from "react";
import { GoChecklist } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBulb } from "react-icons/sl";
import { FiMinus } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import "./CSS/HeaderTop.css";

const HeaderTop = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="header-top">
            <div className="outlook-text">
                <span className="text-light">Outlook</span>
            </div>
            <div className="search-bar">
                <div className="search-icon">
                    <IoSearchOutline className="text-dark" />
                </div>
                {!isMobile && (
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={(e) => console.log(e.target.value)}
                        style={{ paddingLeft: '40px' }}
                    />
                )}
            </div>
            <div className="user-actions">
                {isMobile ? (
                    <>
                        <div className="dropdown" onClick={toggleDropdown}>
                            <span  aria-haspopup="true" aria-expanded={showDropdown ? "true" : "false"}>
                                <BsThreeDots className="text-light" />
                            </span>
                            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                                <a href="/#" className="dropdown-item"><GoChecklist /> <span className="ms-2">Go Checklist</span></a>
                                <a href="/#" className="dropdown-item"><IoIosNotificationsOutline /> <span className="ms-2">Notifications</span></a>
                                <a href="/#" className="dropdown-item"><IoSettingsOutline /> <span className="ms-2">Settings</span></a>
                                <a href="/#" className="dropdown-item"><SlBulb /> <span className="ms-2">Bulb</span></a>
                            </div>
                        </div>
                        <button className="user-action-btn text-light ms-4"><FiMinus /></button>
                        <button className="user-action-btn text-light ms-4"><MdContentCopy /></button>
                        <button className="user-action-btn text-light ms-4"><RxCross2 /></button>
                    </>
                ) : (
                    <>
                        <button className="user-action-btn text-light ms-4"><GoChecklist /></button>
                        <button className="user-action-btn text-light ms-4"><IoIosNotificationsOutline /></button>
                        <button className="user-action-btn text-light ms-4"><IoSettingsOutline /></button>
                        <button className="user-action-btn text-light ms-4"><SlBulb /></button>
                        <button className="user-action-btn text-light ms-4"><FiMinus /></button>
                        <button className="user-action-btn text-light ms-4"><MdContentCopy /></button>
                        <button className="user-action-btn text-light ms-4"><RxCross2 /></button>
                    </>
                )}
            </div>
        </header>
    );
};

export default HeaderTop;
