import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  BsBook,
  BsCalendar,
  BsCalendarEvent,
  BsChatDots,
  BsFileText,
  BsGear,
  BsGraphDown,
  BsGraphUp,
  BsPeople,
  BsPerson,
} from "react-icons/bs";
import {
  Logo,
  SidebarContainer,
  SidebarHeader,
  SidebarIcon,
  SidebarNav,
  SidebarNavItem,
  StyledLink,
  ToggleButton,
  ToggleIcon,
} from "../../styles/SidebarStyles";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SidebarContainer style={{ width: isOpen ? "250px" : "58px" }}>
      <SidebarHeader>
        <Logo src={logo} alt="logo" />
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          <StyledLink to="/student/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/student/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/student/attendance">Attendance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/student/exams">Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/student/performance">Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/student/announcements">Announcements</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/student/library">Library</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/student/settings">Profile</StyledLink>
        </SidebarNavItem>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>☰</ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
}

export default Sidebar;
