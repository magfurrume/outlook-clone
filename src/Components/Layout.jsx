import React, { useState } from 'react';

import HeaderTop from './HeaderTop';
import SidebarFixed from './SidebarFixed';
import HeaderBottom from './HeaderBottom';
import Inbox from './Inbox';
import Sidebar from './Sidebar';
import EmailBody from './EmailBody';
import { inboxEmails, sentEmails, junkEmails, drafts } from "./utils/Emails";
import NavBar from './NavBar';

export default function Layout() {
    const [selectedCategory, setSelectedCategory] = useState("Inbox");
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [selectedEmail, setSelectedEmail] = useState(null);


    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    const getCategoryEmails = (category) => {
        switch (category) {
            case "Inbox":
                return inboxEmails;
            case "Sent Items":
                return sentEmails;
            case "Junk Emails":
                return junkEmails;
            case "Drafts":
                return drafts;
            default:
                return [];
        }
    };

    const bodycontentStyle = {
        height: 'calc(100vh - 3.7rem)',
        display: 'flex',
        marginTop: 'calc(.7rem + 3rem)',
        width: 'calc(100vw - 20px)',
    };

    const contentStyle = {
        flexGrow: 1,
        width: 'calc(100vw - 50px)'
    };

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
    };

    return (
        <>
            <HeaderTop />
            <div className="body-content" style={bodycontentStyle}>
                <div>
                    <SidebarFixed />
                </div>
                <div style={contentStyle}>
                    <HeaderBottom toggleSidebar={toggleSidebar} />
                    <NavBar selectedEmail={selectedEmail} />

                    <div className=' row email-section'>
                        <div className={`sidebar col-2 ${isSidebarVisible ? '' : 'd-none'}`}>
                            {isSidebarVisible && <Sidebar onCategoryChange={handleCategoryChange} />}
                        </div>
                        <div className='col-3'>
                            <Inbox title={selectedCategory} emails={getCategoryEmails(selectedCategory)} onEmailClick={handleEmailClick} />
                        </div>
                        <div className={`sidebar ${isSidebarVisible ? 'col-7' : 'col-9'}`}>
                            <EmailBody selectedEmail={selectedEmail} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
