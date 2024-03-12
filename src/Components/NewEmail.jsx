import React, { useState, useEffect, useRef } from 'react';
import { MdClose, MdSend } from "react-icons/md";
import './CSS/Forward.css';

export default function ReplyComponent({ onForward, onCancel }) {
    const [replyContent, setReplyContent] = useState('');
    const recipientInputRef = useRef(null);

    useEffect(() => {
        // Focus on the recipient input field when the component mounts
        recipientInputRef.current.focus();
    }, []);

    const handleForwardClick = () => {
        onForward();
    };

    const handleCancelClick = () => {
        onCancel();
    };

    return (
        <div className='reply-component card' style={{ margin: "10px 0" }}>
            <div className="card-header d-flex flex-column align-items-start justify-content-between">
                <button className="cross_button" onClick={handleCancelClick}><MdClose /></button>
                <div>
                    <p>To: <input type="text" className="border-none cursor-type" id="recipient" ref={recipientInputRef} style={{ background: 'transparent' }} /></p>
                </div>
                <div className='border'>
                </div>
                <div >
                    <input type="text" placeholder='Add a subject' className="border-none " id="subject" ref={recipientInputRef} style={{ background: 'transparent' }} />
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <textarea
                        className="form-control border-none"
                        id="replyContent"
                        placeholder='Type..'
                        rows="10"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                    />
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-secondary mr-2" onClick={handleCancelClick}>Cancel</button>
                <button className="btn btn-primary" onClick={handleForwardClick}><MdSend /> Send</button>
            </div>
        </div >
    );
}
