import React, { useState, useEffect } from "react";
import {
  AddClassButton,
  AddClassForm,
  AddClassInput,
  ClassesContainer,
  ClassesContent,
  ClassHeader,
  ClassList,
} from "../../styles/ClassesStyles";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Content } from "../../styles/DashboardStyles";

function Classes() {
  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput type="text" placeholder="Enter Class Name" />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList></ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
}

export default Classes;
