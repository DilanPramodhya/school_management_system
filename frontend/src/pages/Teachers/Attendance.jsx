import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {} from "../../styles/DashboardStyles";
import { BsBorderWidth } from "react-icons/bs";
import {
  AttendanceHeader,
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  SubmitButton
} from "../../styles/AttendanceStyles";
import Sidebar from "./Sidebar";

function CheckAttendanceSection() {

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            <AttendanceItem>
              <StudentName></StudentName>
              <CheckboxLabel>
                <input type="checkbox" />
                Present
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" />
                Absent
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" />
                Absent with apology
              </CheckboxLabel>
            </AttendanceItem>
          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
}

export default CheckAttendanceSection;
