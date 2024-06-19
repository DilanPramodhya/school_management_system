import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StudentDashboardContainer,
  BottomContent,
  Card,
  CardContainer,
  CardContent,
  CardTitle,
  Content,
  Section,
  SectionTitle,
  TopContent,
} from "../../styles/DashboardStyles";
import EventCalender from "./EventCalender";
import Performance from "./Performance";
import Announcement from "./Announcement";
import Sidebar from "./Sidebar";

function StudentDashboard() {
  return (
    <StudentDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Assignments</CardTitle>
              <CardContent>5</CardContent>
            </Card>
            <Card>
              <CardTitle>Performance</CardTitle>
              <CardContent>400</CardContent>
            </Card>
            <Card>
              <CardTitle>Term</CardTitle>
              <CardContent>2</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
        </Section>
      </Content>
    </StudentDashboardContainer>
  );
}

export default StudentDashboard;
