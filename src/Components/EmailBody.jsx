import React from 'react';
import { PiShareFatThin } from "react-icons/pi";

import { BsThreeDots } from "react-icons/bs";
import './CSS/EmailView.css'

export default function EmailBody({ selectedEmail }) {
    return (
        <>
            {selectedEmail ? (
                <>
                    <section className="d-flex align-items-center justify-content-between  border  p-3 round-box">
                        <div className="d-flex align-items-center gap-2">
                            <p className="font-weight-bold">{selectedEmail?.subject}</p>
                        </div>
                    </section>

                    <div className='email-body-area'>
                        <section className="d-flex align-items-center  border p-3 round-box">
                            <div className="d-flex align-items-center gap-2">
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
                                                <PiShareFatThin className="icon" />
                                                <PiShareFatThin className="icon" />
                                                <BsThreeDots className="icon" />

                                            </div>
                                            <div className="datetime">{selectedEmail?.datetime}</div>
                                        </div>

                                    </div>

                                    <div className="email-body">{selectedEmail?.body}</div>
                                    <div className="bottom-buttons">
                                        <button className="btn replay">Reply</button>
                                        <button className="btn replay">Forward</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                    <img src="https://res.cdn.office.net/owamail/hashed-v1/resources/images/illustration_mail-hash-c4bc6831.m.svg" alt="No Email Image" style={{ width: '100px', height: '100px' }} />
                    <p className="text-muted mt-3"><b>Select an item to read</b>.</p>
                    <p className="text-muted">Nothing is selected</p>
                </div>
            )}
        </>
    );
}
