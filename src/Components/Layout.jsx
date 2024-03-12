import React, { useEffect, useState } from 'react';
import HeaderTop from './HeaderTop';
import SidebarFixed from './SidebarFixed';
import HeaderBottom from './HeaderBottom';
import Inbox from './Inbox';
import Sidebar from './Sidebar';
import EmailBody from './EmailBody';
import NavBar from './NavBar';
import Replay from './Replay';
import Forward from './Forward';
import NewEmail from './NewEmail';
import './CSS/Layout.css';

import { inboxEmails, sentEmails, junkEmails, drafts } from "./utils/Emails";

const CATEGORIES = {
    INBOX: "Inbox",
    SENT_ITEMS: "Sent Items",
    JUNK_EMAILS: "Junk Emails",
    DRAFTS: "Drafts",
};

export default function Layout() {
    const [state, setState] = useState({
        selectedCategory: CATEGORIES.INBOX,
        isSidebarVisible: true,
        selectedEmail: null,
        isMobileScreen: false,
        isEmailShow: false,
        isReplayOpen: false,
        isForwardOpen: false,
        isNewEmailOpen: false,
    });

    const { selectedCategory, isSidebarVisible, selectedEmail, isMobileScreen, isEmailShow, isReplayOpen, isForwardOpen, isNewEmailOpen } = state;

    const toggleSidebar = (event) => {
        event.stopPropagation();
        setState((prevState) => ({ ...prevState, isSidebarVisible: !prevState.isSidebarVisible }));
    };

    const handleCategoryChange = (category) => {
        setState((prevState) => ({ ...prevState, selectedCategory: category }));
    };

    const handleEmailClick = (email) => {
        setState((prevState) => ({ ...prevState, selectedEmail: email, isEmailShow: true }));
    };

    const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        setState((prevState) => ({
            ...prevState,
            isSidebarVisible: !isMobile,
            isMobileScreen: isMobile,
        }));
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const emailBodyCrossButtonAction = () => {
        setState((prevState) => ({ ...prevState, isEmailShow: false }));
    };

    const replayAction = () => {
        setState((prevState) => ({ ...prevState, isReplayOpen: true }));
    };

    const forwardButtoAction = () => {
        setState((prevState) => ({ ...prevState, isForwardOpen: true }));
    };

    const handleBodyClick = (event) => {
        const isClickInsideSidebar = event.target.closest('.sidebar');
        if (isMobileScreen && isSidebarVisible && !isClickInsideSidebar) {
            setState((prevState) => ({ ...prevState, isSidebarVisible: false }));
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleBodyClick);

        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    }, [isMobileScreen, isSidebarVisible]);

    const onReplayCancelAction = () => {
        setState((prevState) => ({ ...prevState, isReplayOpen: false }));
    };

    const onForwardCancelAction = () => {
        setState((prevState) => ({ ...prevState, isForwardOpen: false }));
    };

    const newEmailClickAction = () => {
        setState((prevState) => ({ ...prevState, isNewEmailOpen: true }));
    };

    const onNewEmailCancelAction = () => {
        setState((prevState) => ({ ...prevState, isNewEmailOpen: false }));
    };

    const getCategoryEmails = (category) => {
        switch (category) {
            case CATEGORIES.INBOX:
                return inboxEmails;
            case CATEGORIES.SENT_ITEMS:
                return sentEmails;
            case CATEGORIES.JUNK_EMAILS:
                return junkEmails;
            case CATEGORIES.DRAFTS:
                return drafts;
            default:
                return [];
        }
    };

    return (
        <>
            <HeaderTop />
            <div className="body-content">
                <div>
                    <SidebarFixed />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <HeaderBottom toggleSidebar={toggleSidebar} />
                    <NavBar selectedEmail={selectedEmail} newEmail={newEmailClickAction} />
                    <div className='row email-section'>
                        <div className={`sidebar col-2 ${isSidebarVisible ? '' : 'd-none'}`}>
                            {isSidebarVisible && <Sidebar onCategoryChange={handleCategoryChange} />}
                        </div>
                        <div className={`layout_inbox ${isMobileScreen ? 'col-12' : isSidebarVisible? 'col-3' : 'col-4'} ${(isMobileScreen && (isEmailShow || isNewEmailOpen)) ? 'd-none' : 'd-inline'}`}>
                            <Inbox title={selectedCategory} emails={getCategoryEmails(selectedCategory)} onEmailClick={handleEmailClick} />
                        </div>
                        <div className={`layout_email ${isMobileScreen? 'col-12': isSidebarVisible ? 'col-7' : 'col-8'} ${isMobileScreen ? 'mobile_screen' : ''} ${(isMobileScreen && (isEmailShow || isNewEmailOpen)) || !isMobileScreen ? 'd-inline' : 'd-none'}`}>
                            {isReplayOpen && <Replay selectedEmail={selectedEmail} onCancel={onReplayCancelAction} />}
                            {isForwardOpen && <Forward selectedEmail={selectedEmail} onCancel={onForwardCancelAction} />}
                            {isNewEmailOpen && <NewEmail onCancel={onNewEmailCancelAction} />}
                            {!isReplayOpen && !isForwardOpen && !isNewEmailOpen && (
                                <EmailBody
                                    selectedEmail={selectedEmail}
                                    crossButtonAction={emailBodyCrossButtonAction}
                                    replayButtonAction={replayAction}
                                    forwardButtonAction={forwardButtoAction}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
