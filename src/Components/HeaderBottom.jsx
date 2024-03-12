import React, { useEffect, useState, useRef } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import "./CSS/HeaderBottom.css"; // Import CSS file for styles

export default function HeaderBottom({ toggleSidebar }) {
    const [isMobile, setIsMobile] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownRef = useRef(null);

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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        // Cleanup event listener
        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="header-bottom">
            {/* Left Section - Outlook Text */}
            <div className="header-left">
                <div className="user-actions">
                <span className="navbar-brand nav-link" href="#" onClick={(event) => toggleSidebar(event)} style={{ cursor: 'pointer' }}><IoIosMenu /></span>
                    {isMobile ? (
                        <>
                            <nav className="nav-links">
                                <button className="nav-link active">Home</button>
                                <div className="dropdown" onClick={toggleDropdown} ref={dropdownRef} >
                                    <span className="nav-link" aria-haspopup="true" aria-expanded={showDropdown ? "true" : "false"}>
                                        <FaChevronDown className="text-dark" />
                                    </span>

                                    <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                                        <button className="nav-link">View</button>
                                        <button className="nav-link">Help</button>
                                    </div>
                                </div>
                            </nav>
                        </>
                    ) : (
                        <>
                            <nav className="nav-links">
                                <button className="nav-link active">Home</button>
                                <button className="nav-link">View</button>
                                <button className="nav-link">Help</button>
                            </nav>
                        </>
                    )}
                </div>
            </div>
            <div className="header-right">
                <button className="calendar-button"><IoCalendarOutline /></button>
                <div className="event-info">
                    <p className='event-title'>ACCNLDP Internal</p>
                    <p className='event-time'>Tomorrow 10:30 AM</p>
                </div>
            </div>
        </header>
    );
}
