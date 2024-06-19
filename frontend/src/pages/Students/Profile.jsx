import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  Content,
  ProfileContainer,
  ProfileHeader,
  SidebarContainer,
  Label,
  ProfileDetail,
  ProfileInfo,
  Value,
} from "../../styles/SettingsProfileStyles";

function ProfileSection() {
  const studentProfile = {
    name: "John Smith",
    age: 18,
    grade: 13,
    school: "High School",
    email: "john.smith@gmail.com",
  };
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile</ProfileHeader>
        <ProfileInfo>
          <ProfileDetail>
            <Label>Name : </Label>
            <Value>{studentProfile.name}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Name : </Label>
            <Value>{studentProfile.age}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Name : </Label>
            <Value>{studentProfile.grade}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Name : </Label>
            <Value>{studentProfile.school}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Name : </Label>
            <Value>{studentProfile.email}</Value>
          </ProfileDetail>
        </ProfileInfo>
      </Content>
    </ProfileContainer>
  );
}

export default ProfileSection;
