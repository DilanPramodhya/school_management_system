import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AssignmentsContainer,
  AssignmentsContent,
  AssignmentsHeader,
  Content,
  SidebarContainer,
} from "../../styles/AssignmentsStyles";
import Sidebar from "./Sidebar";

function AssignmentSection() {
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment Title"
            />
            <AddAssignmentTextArea
              type="text"
              placeholder="Enter Assignment Description"
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment Grade"
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter Assignment Deadline"
            />
          </AddAssignmentForm>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  );
}

export default AssignmentSection;
