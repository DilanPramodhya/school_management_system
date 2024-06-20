import React from "react";
import {
  ClassContainer,
  ClassHeader,
  ClassList,
  Content,
  SidebarContainer,
} from "../../styles/ClassesStyles";
import Sidebar from "./Sidebar";

function ClassSection() {
  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList></ClassList>
      </Content>
    </ClassContainer>
  );
}

export default ClassSection;
