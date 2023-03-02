import React, { useState } from "react";
import "./Calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function nextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }

  function prevMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }

  function handleDateClick(day) {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day >= startDate) {
        setEndDate(day);
      } else {
        setEndDate(startDate);
        setStartDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  }
  function renderMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    const blanks = Array(firstDay).fill(null);
    const allDays = [...blanks, ...days];
    const rows = [];

    while (allDays.length) {
      rows.push(allDays.splice(0, 7));
    }

    return (
      <div className="month">
        <h2>
          {monthName} {year}
        </h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((day, index) => {
                  const currentDate = new Date(year, month, day);
                  const isStartDate =
                    currentDate.getTime() === startDate?.getTime();
                  const isEndDate =
                    currentDate.getTime() === endDate?.getTime();
                  const isBetweenDates =
                    currentDate > startDate && currentDate < endDate;
                  const className = isStartDate
                    ? "start-date"
                    : isEndDate
                    ? "end-date"
                    : isBetweenDates
                    ? "between-dates"
                    : "";

                  return (
                    <td
                      key={index}
                      className={className}
                      onClick={() =>
                        handleDateClick(new Date(year, month, day))
                      }
                    >
                      {day}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="calendar">
      {renderMonth(currentDate)}
      {renderMonth(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      )}
      <button onClick={prevMonth}>Prev Month</button>
      <button onClick={nextMonth}>Next Month</button>
      {startDate && (
        <div>
          Selected date range: {startDate.toLocaleDateString()} -{" "}
          {endDate ? endDate.toLocaleDateString() : ""}
        </div>
      )}
    </div>
  );
}

export default Calendar;
