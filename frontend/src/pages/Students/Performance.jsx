import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {} from "../../styles/DashboardStyles";
import {
  Content,
  PerformanceContainer,
  PerformanceGraphContainer,
  PerformanceHeader,
  PerformanceInfo,
  SidebarContainer,
  TotalMarks,
} from "../../styles/PerformanceStyles";
import Sidebar from "./Sidebar";

function PerformanceSection() {
  const performanceData = {
    months: ["Jan", "Feb", "March", "April", "May", "June"],
    results: [80, 75, 90, 60, 55, 60],
    TotalMarks: 520,
  };

  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        labels: "Performance Trends",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: performanceData.results,
      },
    ],
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                scale: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks : {performanceData.TotalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
}

export default PerformanceSection;
