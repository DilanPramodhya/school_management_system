import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContainer,
  CardContent,
  CardTitle,
  Content,
  Section,
  SectionTitle,
  TeacherDashboardContainer,
} from "../../styles/DashboardStyles";
import Sidebar from "./Sidebar";

function TeacherDashboard() {
  return (
    <TeacherDashboardContainer>
      <Sidebar />
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>20</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>20</CardContent>
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
    </TeacherDashboardContainer>
  );
}

export default TeacherDashboard;
