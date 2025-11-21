import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { HiHome, HiUser, HiCog, HiBell } from "react-icons/hi";

const MainHeader: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Logo/Brand */}
        <div className="header-brand">
          <h1 className="brand-text">YourApp</h1>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href="#home" className="nav-link">
            <HiHome className="nav-icon" />
            <span>Home</span>
          </a>
          <a href="#profile" className="nav-link">
            <HiUser className="nav-icon" />
            <span>Profile</span>
          </a>
          <a href="#settings" className="nav-link">
            <HiCog className="nav-icon" />
            <span>Settings</span>
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          {/* Notifications */}
          <button className="action-btn">
            <HiBell className="action-icon" />
            <span className="notification-badge">3</span>
          </button>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* User Profile */}
          <div className="user-profile">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="User"
              className="user-avatar"
            />
            <span className="user-name">OMID</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
