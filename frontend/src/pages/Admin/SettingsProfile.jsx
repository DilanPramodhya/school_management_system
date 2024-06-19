import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  Content,
  ProfileContainer,
  SidebarContainer,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from "../../styles/SettingsProfileStyles";

function SettingsProfile() {
  const teacherInfo = {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "123456789",
    address: "Main street, Canada",
    qualification: "Bachelor of Education ",
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name :</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>

          <ProfileLabel>Email :</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>

          <ProfileLabel>Phone :</ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

          <ProfileLabel>Address :</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>

          <ProfileLabel>Qualification :</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  );
}

export default SettingsProfile;
