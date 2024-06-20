import React from "react";
import {
  Content,
  TeacherList,
  TeachersContainer,
  TeachersContent,
  TeachersHeader,
} from "../../styles/TeachersStyles";
import Sidebar from "./Sidebar";

function TeacherSection() {
  return (
    <TeachersContainer>
      <Sidebar />
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <TeacherList></TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
}

export default TeacherSection;
