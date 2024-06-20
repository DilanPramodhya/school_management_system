import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { TiThMenu } from "react-icons/ti";
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
    <SidebarContainer style={{ width: isOpen ? "230px" : "75px" }}>
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
          <StyledLink to="/admin/dashboard">Dashboard</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/admin/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPeople />
          </SidebarIcon>
          <StyledLink to="/admin/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsPerson />
          </SidebarIcon>
          <StyledLink to="/admin/teachers">Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsFileText />
          </SidebarIcon>
          <StyledLink to="/admin/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/admin/exams">Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGraphDown />
          </SidebarIcon>
          <StyledLink to="/admin/performance">Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendar />
          </SidebarIcon>
          <StyledLink to="/admin/attendance">Attendance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsBook />
          </SidebarIcon>
          <StyledLink to="/admin/library">Library</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsChatDots />
          </SidebarIcon>
          <StyledLink to="/admin/communication">Announcement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsCalendarEvent />
          </SidebarIcon>
          <StyledLink to="/admin/events">Events and Calender</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon>
            <BsGear />
          </SidebarIcon>
          <StyledLink to="/admin/settings">Settings and Profile</StyledLink>
        </SidebarNavItem>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon isOpen={isOpen}>☰</ToggleIcon>
        </ToggleButton>
      </SidebarNav>
    </SidebarContainer>
  );
}

export default Sidebar;
