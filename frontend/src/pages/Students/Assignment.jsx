import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AssignmentsContainer,
  Content,
  SidebarContainer,
} from "../../styles/AssignmentsStyles";
import Sidebar from "./Sidebar";

function StudentAssignments() {
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Assignments</h1>
      </Content>
    </AssignmentsContainer>
  );
}

export default StudentAssignments;
