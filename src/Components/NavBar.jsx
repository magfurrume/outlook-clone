import React, { useEffect, useState } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";
import { GoArchive } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";
import { LuFolderSymlink } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { BsCalendar4Event } from "react-icons/bs";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import './CSS/Navbar.css';

export default function NavBar({ selectedEmail }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setButtonDisabled(selectedEmail === null);
    }, [selectedEmail]);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div style={{ padding: "10px 0", paddingLeft: '10px' }}>
            <section className="d-flex align-items-center justify-content-between rounded-1 border bg-white shadow-md p-1">
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary btn-left" onClick={() => console.log("New Email")}>
                        <MdOutlineMailOutline /> New Email
                    </button>
                    <div className="dropdown" onClick={toggleDropdown}>
                        <button aria-expanded={showDropdown ? "true" : "false"} className="btn btn-primary btn-right">
                            <FaAngleDown />
                        </button>
                        <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                            <a href="/#" className="dropdown-item"><MdOutlineMailOutline /> <span className="ms-2">Email</span></a>
                            <a href="/#" className="dropdown-item"><BsCalendar4Event /> <span className="ms-2">Event</span></a>
                            <a href="/#" className="dropdown-item"><SiMicrosoftexcel /> <span className="ms-2">Spreadsheet</span></a>
                            <a href="/#" className="dropdown-item"><PiMicrosoftPowerpointLogo /> <span className="ms-2">Powerpoint</span></a>
                        </div>
                    </div>
                    <button className="btn text-dark ms-1" onClick={() => console.log("Delete")} disabled={buttonDisabled}>
                        <BsTrash3 /> <span className="d-none d-md-inline"> Delete</span>
                    </button>
                    <button className="btn text-dark ms-1" onClick={() => console.log("Archive")} disabled={buttonDisabled}>
                        <GoArchive /> <span className="d-none d-md-inline"> Archive</span>
                    </button>
                    <button className="btn text-dark ms-1" onClick={() => console.log("Report")} disabled={buttonDisabled}>
                        <MdOutlineReport />  <span className="d-none d-md-inline"> Report</span>
                    </button>
                    <button className="btn text-dark ms-1" onClick={() => console.log("Move to")} disabled={buttonDisabled}>
                        <LuFolderSymlink />  <span className="d-none d-md-inline"> Move to</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
