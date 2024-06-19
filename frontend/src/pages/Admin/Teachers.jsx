import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  TeachersContainer,
  TeachersContent,
  TeachersHeader,
  AddTeacherButton,
  TeacherList,
  AddTeacherInput,
  AddTeacherForm,
} from "../../styles/TeachersStyles";
import { Content } from "../../styles/DashboardStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Teachers() {
  return (
    <TeachersContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <TeachersContent>
          <TeachersHeader>
            <AddTeacherForm>
              <AddTeacherInput type="text" placeholder="Enter Teacher Name" />
              <AddTeacherInput type="email" placeholder="Enter Teacher email" />
              <AddTeacherInput type="text" placeholder="Enter Subject" />
              <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
            </AddTeacherForm>
            <TeacherList></TeacherList>
          </TeachersHeader>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
}

export default Teachers;
