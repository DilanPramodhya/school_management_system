import React, { useState, useEffect } from "react";
import axios from "axios";
import {Bar} from "react-chartjs-2";
import {} from "../../styles/DashboardStyles";
import { BsBorderWidth } from "react-icons/bs";
import {
  Content,
  ExamChartContainer,
  ExamContainer,
  ExamHeader,
  ExamResult,
  ExamResultsContainer,
  ExamSubject,
  SidebarContainer,
} from "../../styles/ExamStyles";
import Sidebar from "./Sidebar";

function ExamSection() {
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 60],
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        labels: "Exam Results",
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: "1",
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.results,
      },
    ],
  };

  // const chartOptions = {
  //   scales: {
  //     y: {
  //       type: "linear",
  //       beginAtZero: true,
  //       max: 100,
  //     },
  //   },
  // };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>
                Score : {examResultsData.results[index]} %
              </ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            {/* <Bar ref={chartRef} data={barChartData} options={chartOptions} /> */}
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
}

export default ExamSection;
