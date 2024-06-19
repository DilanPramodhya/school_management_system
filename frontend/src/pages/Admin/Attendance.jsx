import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AttendanceHeader,
  AttendanceContainer,
  Content,
  AttendanceContent,
  AttendanceList,
  AttendanceItem,
  StudentName,
  CheckboxLabel,
  SubmitButton,
} from "../../styles/AttendanceStyles";

function Attendance() {
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

export default Attendance;
