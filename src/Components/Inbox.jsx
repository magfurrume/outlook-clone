// Inbox.js
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";



const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const Inbox = ({ title, emails, onEmailClick }) => {
    return (
        <div className="rounded-md border bg-white " style={{ height: 'calc(100vh - 11.4rem)', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            {/* top section */}
            <section className="d-flex align-items-center justify-content-between" style={{ borderBottom: '1px solid #dee2e6', padding: '10px 20px' }}>
                <div className="d-flex align-items-center gap-2">
                    <p className="font-weight-bold">{title}</p>
                    <button className="btn btn-link">
                        <FaRegStar />
                    </button>
                </div>
                {/* title */}
                <IoFilter className="cursor-pointer text-xl text-gray-500" />
            </section>

            {/* middle section */}
            <section className="d-flex flex-column gap-4 p-3 flex-grow-1 overflow-auto">
                {emails.map((email) => (
                    <div key={email.id} className="d-flex align-items-flex-start" onClick={() => onEmailClick(email)} style={{ cursor: 'pointer' }}>
                        <img
                            src={email.profileImage}
                            alt="profile"
                            className="rounded-circle mr-2"
                            width="40"
                            height="40"
                        />
                        <div className="flex-grow-1" style={{ paddingLeft: '10px' }}>
                            <p className="font-weight-bold"><b>{email.sender}</b></p>
                            <div className="d-flex justify-content-between flex-directiopn-row">
                                <p className="font-weight-bold"><b>{truncateText(email.subject, 30)}</b></p>
                                <p className="font-weight-bold"><b>9:01 AM</b></p>
                            </div>

                            <p className="text-gray-500">{truncateText(email.body, 50)}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Inbox;
