import React, { useState } from "react";
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
        color: 'red'
    },
    {
        icon: IoCalendarOutline,
        title: 'Calendar',
        isActive: false,
        color: '#333'
    },
    {
        icon: GoPeople,
        title: 'People',
        isActive: false,
        color: '#333'
    },
    {
        icon: SiMicrosoftword,
        title: 'Word',
        isActive: false,
        color: '#185ABD'
    },
    {
        icon: SiMicrosoftexcel,
        title: 'Excel',
        isActive: false,
        color: '#107C41'
    },
    {
        icon: PiMicrosoftPowerpointLogo,
        title: 'PowerPoint',
        isActive: false,
        color: '#D35230'
    },
    {
        icon: SiMicrosoftonedrive,
        title: 'OneDrive',
        isActive: false,
        color: '#28A8EA'
    },
    {
        icon: LiaMicrosoft,
        title: 'More Apps',
        isActive: false,
        color: '#333'
    }
];

export default function FixedSidebar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="d-flex flex-column align-items-center bg-light " style={{ minWidth: "50px", maxWidth: "50px", height: "100%" }}>
            {itemData.map(({ icon: Icon, title, isActive, color }, i) => (
                <button
                    key={i}
                    className={`w-100 d-flex align-items-center justify-content-center py-3 ${isActive ? 'border-start border-primary' : ''}`}
                    style={{
                        cursor: 'pointer',
                        border: 'none',
                        background: i === hoveredIndex ? '#fff' : 'none', // Background color change on hover
                        paddingLeft: '20px', // Padding left in tooltip
                    }}
                    title={title}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Icon
                        className={`text-xl fixed_side_bar_icon ${isActive ? 'text-primary' : ''}`}
                        style={{ fontSize: '20px', color: i === hoveredIndex ? '#0F6CBD' : color }} // Change color on hover
                    />
                </button>
            ))}
        </div>
    );
}
