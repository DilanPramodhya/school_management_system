import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {} from "../../styles/DashboardStyles";
import { BsBorderWidth } from "react-icons/bs";
import {
  Content,
  AttendanceContainer,
  AttendanceHeader,
  SidebarContainer,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus,
} from "../../styles/AttendanceStyles";
import Sidebar from "./Sidebar";

function AttendanceSection() {
  const attendance = [
    { id: 1, date: "2024-06-20", present: true },
    { id: 2, date: "2024-06-22", present: false },
    { id: 3, date: "2024-06-24", present: true },
    { id: 4, date: "2024-06-26", present: true },
    { id: 5, date: "2024-06-28", present: true },
  ];

  return (
    <AttendanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AttendanceHeader>Attendance</AttendanceHeader>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>
                {present ? "Present" : "Absent"}
              </AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
}

export default AttendanceSection;
