import React, { useState } from 'react';
import { MdClose, MdSend } from "react-icons/md";
import './CSS/ReplyComponent.css';

export default function ReplyComponent({ selectedEmail, onReply, onCancel }) {
    const [replyContent, setReplyContent] = useState('');

    const handleReplyClick = () => {

        onReply();
    };

    const handleCancelClick = () => {
        onCancel();
    };

    return (
        <div className='reply-component card'>
            <div className="card-header d-flex flex-column align-items-start justify-content-between">
                <button className="cross_button" onClick={handleCancelClick}><MdClose /></button>
                <div>
                    <p>To: {selectedEmail.sender}</p>
                    <p>Subject: Reply on {selectedEmail.subject}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="replyContent"
                        rows="4"
                        placeholder="Type your reply here..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                    />
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-secondary mr-2" onClick={handleCancelClick}>Cancel</button>
                <button className="btn btn-primary" onClick={handleReplyClick}><MdSend /> Send</button>
            </div>
        </div>
    );
}
