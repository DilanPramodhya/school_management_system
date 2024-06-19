import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AnnouncementContainer,
  Content,
  Title,
  FormGroup,
  Label,
  Button,
  AnnouncementForm,
  TextArea,
  AnnouncementList,
} from "../../styles/AnnouncementStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Announcement() {
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm>
          <FormGroup>
            <Label htmlFor="announcement">Announcement</Label>
            <TextArea required rows={4} cols={5} />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        {/* To Display Announcement */}
        <h2>Announcement</h2>
        <AnnouncementList></AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
}

export default Announcement;
