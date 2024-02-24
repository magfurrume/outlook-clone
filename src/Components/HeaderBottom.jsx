import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
;

export default function HeaderBottom({ toggleSidebar }) {

    const headerBottomStyle = {
        padding: "0 .7rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: 'black'
    };


    return (
        <header style={headerBottomStyle}>
            {/* Left Section - Outlook Text */}
            <div className="col-2 d-flex align-items-center">
                <a className="navbar-brand" href="#" onClick={toggleSidebar}><IoIosMenu /></a>
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Home</a>
            </div>
            <div className="col-8 d-flex justify-content-end align-items-center header-top-icon">
                <a href="/#"><IoCalendarOutline /></a>
                <div style={{ paddingLeft: '10px' }}>
                    <p className='m-0'>ACCNLDP Internal - 11:30 AM</p>
                    <p className='m-0' style={{ fontSize: '14px' }}>Tomorrow 10:30 AM</p>
                </div>

            </div>
        </header>
    )
}
