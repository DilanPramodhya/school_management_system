import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  PerformanceHeader,
  PerformanceContainer,
  Content,
  PerformanceContent,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function Performance() {
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };
  const individualPerformanceData = [
    { id: 1, name: "John Doe", score: 80 },
    { id: 2, name: "Jeni Doe", score: 76 },
    { id: 3, name: "James Clark", score: 84 },
  ];
  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score : {schoolPerformanceData.averageScore} </p>
            <p>Total Students : {schoolPerformanceData.totalStudents} </p>
          </SchoolPerformance>
          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name} : {student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
}

export default Performance;
