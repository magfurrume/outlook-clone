// Inbox.js
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import './CSS/Inbox.css'



const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const Inbox = ({ title, emails, onEmailClick }) => {
    return (
        <div className="rounded-md border bg-white inbox-componet">
            {/* top section */}
            <section className="d-flex align-items-center justify-content-between" style={{ borderBottom: '1px solid #dee2e6', padding: '10px 20px' }}>
                <div className="d-flex align-items-center gap-2">
                    <p className="fw-bold">{title}</p>
                    <button className="btn btn-link">
                        <FaRegStar />
                    </button>
                </div>
                {/* title */}
                <IoFilter className="cursor-pointer text-xl text-gray-500" style={{ cursor: 'pointer' }} />
            </section>

            {/* middle section */}
            <section className="d-flex flex-column flex-grow-1 overflow-auto">
                {emails.map((email) => (
                    <div key={email.id}>
                        <div className="d-flex align-items-flex-start p-2 inbox_item_area" onClick={() => onEmailClick(email)} style={{ cursor: 'pointer' }}>
                            <img
                                src={email.profileImage}
                                alt="profile"
                                className="rounded-circle mr-2"
                                width="40"
                                height="40"
                            />
                            <div className="flex-grow-1" style={{ paddingLeft: '10px' }}>
                                <p className={`fw-${email.view === 'unread' ? 'bold' : 'normal'}`}>{email.sender}</p>
                                <div className="d-flex justify-content-between flex-direction-row">
                                    <p className={`fw-${email.view === 'unread' ? 'bold' : 'normal'}`}>{truncateText(email.subject, 15)}</p>
                                    <p className={`fw-${email.view === 'unread' ? 'bold' : 'normal'}`}>9:01 AM</p>
                                </div>
                                <p className="text-gray-500">{truncateText(email.body, 40)}</p>
                            </div>

                        </div>
                        <div className="border" style={{ margin: '0px' }}></div>
                    </div>
                ))}

            </section>
        </div>
    );
};

export default Inbox;
