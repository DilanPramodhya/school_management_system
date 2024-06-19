import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AdminDashboardContainer,
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

function AdminDashboard() {
  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
            <SectionTitle>All Events</SectionTitle>
          </Section>
        </TopContent>

        <BottomContent>
          <Performance />
          <Announcement />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
}

export default AdminDashboard;
