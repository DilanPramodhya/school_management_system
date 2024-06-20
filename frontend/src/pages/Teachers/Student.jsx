import React from "react";
import { Content, StudentList, StudentsContainer, StudentsContent, StudentsHeader } from "../../styles/StudentsStyles";
import Sidebar from "./Sidebar";

function StudentSection() {
  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <StudentList></StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
}

export default StudentSection;
