import React, { useState, useEffect } from "react";
import axios from "axios";
import {} from "../../styles/DashboardStyles";
import {
  Content,
  LibraryContainer,
  LibraryHeader,
  SidebarContainer,
  BookList,
} from "../../styles/LibraryStyles";
import Sidebar from "./Sidebar";

function LibrarySection() {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  );
}

export default LibrarySection;
