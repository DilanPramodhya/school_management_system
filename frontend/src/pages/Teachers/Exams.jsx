import React, { useState, useEffect } from "react";
import axios from "axios";
import {} from "../../styles/DashboardStyles";
import {
  AddButton,
  Content,
  ExamChartContainer,
  ExamContainer,
  ExamForm,
  ExamHeader,
  ExamResult,
  ExamResultsContainer,
  ExamSubject,
  FormInput,
  FormLabel,
  SidebarContainer,
} from "../../styles/ExamStyles";
import Sidebar from "./Sidebar";

function CheckExamSection() {
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name : </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Registration Number : </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Class : </FormLabel>
          <FormInput type="text" required />
          <FormLabel>Marks : </FormLabel>
          <FormInput type="text" required />
          <AddButton type="submit">Add exam</AddButton>
        </ExamForm>
        <h2>Total Marks :</h2>
        <h3>Exam Details :</h3>
        <ul></ul>
      </Content>
    </ExamContainer>
  );
}

export default CheckExamSection;
