import React, { useState, useEffect } from "react";
import axios from "axios";
import {} from "../../styles/DashboardStyles";
import {
  Content,
  AnnouncementContainer,
  AnnouncementHeader,
  SidebarContainer,
  AnnouncementList,
} from "../../styles/AnnouncementStyles";
import Sidebar from "./Sidebar";

function AnnouncementSection() {
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcement</AnnouncementHeader>
        <AnnouncementList></AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
}

export default AnnouncementSection;
