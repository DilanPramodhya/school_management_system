import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  AddButton,
  ExamHeader,
  ExamContainer,
  FormInput,
  FormLabel,
  Content,
  ExamForm,
  SidebarContainer,
} from "../../styles/ExamStyles";

function Exam() {
  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i) {
      total = examData[i].marks;
    }
    return total;
  };
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name :</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Registration Number :</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Class :</FormLabel>
          <FormInput type="text" required />
          <FormLabel>Marks :</FormLabel>
          <FormInput type="text" required />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        <h2>Total Marks : {calculateTotalMarks} </h2>
        <h3>Exam Details</h3>
        <ul></ul>
      </Content>
    </ExamContainer>
  );
}

export default Exam;
