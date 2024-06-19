import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  AddEventForm,
  EventInput,
  AddEventButton,
  Events,
} from "../../styles/EventCalendarStyles";
import { SidebarContainer } from "../../styles/ExamStyles";

function EventCalendar() {
  return (
    <EventCalendarContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Events and Calendar</h1>
        <div>Current Time : </div>
        <CalendarContainer>
          {/* Display the calendar */}
          Calendar
        </CalendarContainer>
        <AddEventForm>
          <EventInput type="text" placeholder="Enter Event" />
          <AddEventButton type="submit">Send EventCalendar</AddEventButton>
        </AddEventForm>

        <Events>
          <h2>Events</h2>
        </Events>
      </Content>
    </EventCalendarContainer>
  );
}

export default EventCalendar;
