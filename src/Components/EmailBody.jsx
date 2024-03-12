import React, { useEffect, useState, useRef } from 'react';
import { MdClose } from "react-icons/md";
import { LuForward } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";







import { BsThreeDots } from "react-icons/bs";
import './CSS/EmailBody.css'

export default function EmailBody({ selectedEmail, crossButtonAction, replayButtonAction, forwardButtonAction }) {
    const isMobile = window.innerWidth <= 768;
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleActionButtonClick = () => {
        crossButtonAction();
    };
    const handleReplayButtonClick = () => {
        replayButtonAction();
    }

    const forwardButtonClick = () => {
        forwardButtonAction();
    }

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


    const bodycontentStyle = {
        height: '100%!important',
        display: 'flex',
        marginTop: 'calc(.7rem + 3rem)',
        width: 'calc(100vw - 20px)',
        background: 'red'
    };
    const iconStyle = {
        fontSize: '24px',

    };

    return (
        <div className='email-body-component' style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {selectedEmail ? (
                <>
                    <section className="d-flex align-items-center justify-content-between  border  p-3 round-box">
                        <div className="d-flex align-items-center gap-2">
                            <span className="cross_button" onClick={handleActionButtonClick}><MdClose /></span>
                            <p className="font-weight-bold">{selectedEmail?.subject}</p>
                        </div>
                    </section>

                    <div className='email-body-area'>
                        <section className=" align-items-center  border p-3 round-box">
                            <div className=" align-items-center gap-2">
                                <div className="outlook-email-view">
                                    <div className="header">
                                        <div className="profile-image">
                                            <img
                                                src={selectedEmail.profileImage}
                                                alt="profile"
                                                className="rounded-circle mr-2"
                                                width="40"
                                                height="40"
                                            />
                                        </div>
                                        <div className="sender-info">
                                            <div className="sender">{selectedEmail?.sender}</div>
                                            <div className="subject">To: {selectedEmail?.to}</div>
                                        </div>
                                        <div className='item-right'>
                                            <div className="icons">
                                                <LuForward color='#9C4BAC' styles={iconStyle} onClick={handleReplayButtonClick} className="icon" style={{ transform: 'scaleX(-1)', fontSize: '24px' }} />

                                                {!isMobile && (
                                                    <LuForward color='#2C8FDB' style={iconStyle} onClick={forwardButtonClick} className="icon" />
                                                )}

                                                <div className="dropdown" onClick={toggleDropdown} ref={dropdownRef}>
                                                    <span aria-haspopup="true" aria-expanded={showDropdown ? "true" : "false"}>
                                                        <BsThreeDots className="text-dark" />
                                                    </span>
                                                    <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{ right: showDropdown ? '0' : '-100%' }}>
                                                        <a href="/#" className="dropdown-item"><LuForward className="text-light" /> <span className="ms-2">Other replay actions</span> <MdKeyboardArrowRight /></a>
                                                        <a href="/#" className="dropdown-item"><RiDeleteBinLine color='#2C8FDB' /> <span className="ms-2">Delete</span></a>
                                                        <a href="/#" className="dropdown-item"><AiOutlineMail color='#2C8FDB' /> <span className="ms-2">Mark as read</span></a>
                                                        <a href="/#" className="dropdown-item"><CiFlag1 color='#C4787C' /> <span className="ms-2">Flag</span></a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="datetime">{selectedEmail?.datetime}</div>
                                        </div>

                                    </div>

                                    <div className="email-body">{selectedEmail?.body}</div>
                                    <div className="bottom-buttons">
                                        <button className="btn replay" onClick={handleReplayButtonClick}><LuForward color='#2C8FDB' onClick={handleReplayButtonClick} className="icon" style={{ transform: 'scaleX(-1)', fontSize: '24px' }} /> Reply</button>
                                        <button className="btn replay" onClick={forwardButtonClick}>  <LuForward color='#2C8FDB' style={iconStyle} onClick={forwardButtonClick} className="icon" /> Forward</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center h-100" >
                    <img src="https://res.cdn.office.net/owamail/hashed-v1/resources/images/illustration_mail-hash-c4bc6831.m.svg" alt="No Email Image" style={{ width: '100px', height: '100px' }} />
                    <p className="text-muted mt-3"><b>Select an item to read</b>.</p>
                    <p className="text-muted">Nothing is selected</p>
                </div>
            )}
        </div>
    );
}
