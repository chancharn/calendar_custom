import "./App.css";

import React, { useState } from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "ko-KR": import("date-fns/locale/ko"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Meeting",
    allDay: true,
    start: new Date(2023, 2, 3),
    end: new Date(2023, 2, 15),
  },
  {
    title: "Vacation",
    allDay: true,
    start: new Date(2023, 2, 16),
    end: new Date(2023, 2, 18),
  },
  {
    title: "Conference",
    allDay: true,
    start: new Date(2023, 2, 4),
    end: new Date(2023, 2, 5),
  },
];

function App() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  function handleAddEvent() {
    setAllEvent([...allEvent, newEvent]);
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          type=""
          name=""
          value={newEvent.title}
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
      <DatePicker
        placeholderText="Start Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholderText="End Date"
        style={{ marginRight: "10px" }}
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button type="" style={{ marginTop: "10px" }} onClick={handleAddEvent}>
        Add Event
      </button>
      <Calendar
        localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default App;
