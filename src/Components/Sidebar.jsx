// EmailDropdown.js
import React, { useState } from "react";
import { MdOutlineInbox } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";
import { LuFolderLock } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";

const EmailDropdown = ({ onCategoryChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    // Handle the click for each item (e.g., navigate to a different section)
    console.log(`Clicked: ${item}`);
    onCategoryChange(item); // Notify the parent component about the selected category
  };

  return (
    <div className="email-dropdown">
      <button
        className="btn btn-link text-dark p-0"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
        style={{ textDecoration: 'none', fontSize: '18px' }}
      >
        <FaChevronDown /> <b>magfurrume@gmail.com </b>
      </button>
      {isDropdownOpen && (
        <ul className="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="dropdown-item" onClick={() => handleItemClick("Inbox")}>
              <MdOutlineInbox className="mr-2" style={{ fontSize: '20px' }} /> Inbox
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="dropdown-item" onClick={() => handleItemClick("Sent Items")}>
              <GoPaperAirplane className="mr-2" style={{ fontSize: '20px' }} /> Sent Items
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="dropdown-item" onClick={() => handleItemClick("Drafts")}>
              <TfiPencilAlt className="mr-2" style={{ fontSize: '20px' }} /> Drafts
            </button>
          </li>
          <li style={{ listStyle: 'none', padding: '10px 0' }}>
            <button className="dropdown-item" onClick={() => handleItemClick("Junk Emails")}>
              <LuFolderLock className="mr-2" style={{ fontSize: '20px' }} /> Junk Emails
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default EmailDropdown;
