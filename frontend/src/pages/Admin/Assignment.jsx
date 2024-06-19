import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AddAssignmentButton,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AssignmentList,
  AssignmentsContainer,
  AssignmentsContent,
  AssignmentsHeader,
} from "../../styles/AssignmentsStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Assignment() {
  return (
    <AssignmentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <AssignmentsContent>
        <AssignmentsHeader>Assignments</AssignmentsHeader>
        <AddAssignmentForm>
          <AddAssignmentInput
            type="text"
            placeholder="Enter Assignment Title"
          />
          <AddAssignmentTextArea placeholder="Enter Assignment Description" />
          <AddAssignmentInput
            type="text"
            placeholder="Enter Assignment Grade"
          />
          <AddAssignmentInput
            type="text"
            placeholder="Enter Assignment Deadline  "
          />
          <AddAssignmentButton type="submit">
            Add Assignment
          </AddAssignmentButton>
        </AddAssignmentForm>
        <AssignmentList></AssignmentList>
      </AssignmentsContent>
    </AssignmentsContainer>
  );
}

export default Assignment;
