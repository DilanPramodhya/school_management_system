import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
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
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
      </SidebarHeader>
      <SidebarNav>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphUp />
          </SidebarIcon>
          <StyledLink to="/teacher/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/teacher/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/teacher/attendance">Attendance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/teacher/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          <StyledLink to="/teacher/events">Events</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/teacher/exams">Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/teacher/performance">Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/teacher/communication">Announcements</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/teacher/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPerson />
          </SidebarIcon>
          <StyledLink to="/teacher/teachers">Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/teacher/settings">Profile</StyledLink>
        </SidebarNavItem>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>☰</ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
}

export default Sidebar;
