import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { SiMicrosoftword } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftonedrive } from "react-icons/si";
import { LiaMicrosoft } from "react-icons/lia";

const itemData = [
    {
        icon: MdEmail,
        title: 'Email',
        isActive: true,
    },
    {
        icon: IoCalendarOutline,
        title: 'Calendar',
        isActive: false,
    },
    {
        icon: GoPeople,
        title: 'People',
        isActive: false,
    },
    {
        icon: SiMicrosoftword,
        title: 'Word',
        isActive: false,
    },
    {
        icon: SiMicrosoftexcel,
        title: 'Excel',
        isActive: false,
    },
    {
        icon: PiMicrosoftPowerpointLogo,
        title: 'PowerPoint',
        isActive: false,
    },
    {
        icon: SiMicrosoftonedrive,
        title: 'OneDrive',
        isActive: false,
    },
    {
        icon: LiaMicrosoft,
        title: 'Microsoft',
        isActive: false,
    }
];


export default function FixedSidebar() {
    return (
        <div className="d-flex flex-column align-items-center bg-light " style={{ minWidth: "50px", maxWidth: "50px", height: "100%" }}>
            {itemData.map(({ icon: Icon, title, isActive }, i) => (
                <button
                    key={i}
                    className={`w-100 d-flex align-items-center justify-content-center py-3 ${isActive ? 'border-start border-primary' : ''}`}
                    style={{
                        cursor: 'pointer',
                        border: 'none',
                        background: isActive ? '#e6f7ff' : 'none', // Background color change on hover
                        paddingLeft: '20px', // Padding left in tooltip
                    }}
                    title={title}
                >
                    <Icon
                        className={`text-xl ${isActive ? 'text-primary' : ''}`}
                        style={{ fontSize: '20px' }}
                    />
                </button>
            ))}
        </div>
    );
}
