import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AddStudentInput,
  AddStudentForm,
  StudentsContainer,
  StudentsContent,
  StudentsHeader,
  AddStudentButton,
} from "../../styles/StudentsStyles";
import { Content } from "../../styles/DashboardStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Students() {
  return (
    <StudentsContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm>
              <AddStudentInput type="text" placeholder="Enter Student Name" />
              <AddStudentInput
                type="text"
                placeholder="Enter Registration Number"
              />
              <AddStudentInput type="text" placeholder="Enter Grade" />
              <AddStudentButton type="submit">Add Student</AddStudentButton>
            </AddStudentForm>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
}

export default Students;
