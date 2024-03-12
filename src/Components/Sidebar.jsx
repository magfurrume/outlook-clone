import React, { useState } from "react";
import { MdOutlineInbox } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";
import { LuFolderLock } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import './CSS/Sidebar.css'

const EmailDropdown = ({ onCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {;
    onCategoryChange(item);
  };


  return (
    <div className="email-dropdown">
      <button
        className="btn btn-link text-dark p-0"
        type="button"
        id="fev_dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
        style={{ textDecoration: 'none', fontSize: '16px' }}
      >
        <FaChevronDown /> Favorites
      </button>
      {isDropdownOpen && (
        <ul className="fev_dropdownMenuButton" aria-labelledby="fev_dropdownMenuButton">
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="fev_dropdown" onClick={() => handleItemClick("Inbox")}>
              <MdOutlineInbox className="mr-2" style={{ fontSize: '20px' }} /> Inbox
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="fev_dropdown" onClick={() => handleItemClick("Sent Items")}>
              <GoPaperAirplane className="mr-2" style={{ fontSize: '20px' }} /> Sent Items
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="fev_dropdown" onClick={() => handleItemClick("Drafts")}>
              <TfiPencilAlt className="mr-2" style={{ fontSize: '20px' }} /> Drafts
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="fev_dropdown" onClick={() => handleItemClick("Junk Emails")}>
              <LuFolderLock className="mr-2" style={{ fontSize: '20px' }} /> Junk Emails
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EmailDropdown;
