import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  LibraryContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  BookList,
  Button,
} from "../../styles/LibraryStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Library() {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <Title>Library Management</Title>
        <AddBookForm>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="author" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Author</Label>
            <Input type="text" id="author" />
          </FormGroup>
          <Button type="submit">Add Book</Button>
        </AddBookForm>
        <h2>Books</h2>
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  );
}

export default Library;
