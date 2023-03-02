// import React, { useState } from "react";
// import "./Calendar.css";

// function Calendar() {
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [year, setYear] = useState(new Date().getFullYear());

//   const prevMonth = () => {
//     setMonth((prevMonth) => prevMonth - 1);
//     if (month === 0) {
//       setYear((prevYear) => prevYear - 1);
//       setMonth(11);
//     }
//   };

//   const nextMonth = () => {
//     setMonth((prevMonth) => prevMonth + 1);
//     if (month === 11) {
//       setYear((prevYear) => prevYear + 1);
//       setMonth(0);
//     }
//   };

//   const daysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const firstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const renderCalendar = () => {
//     const days = daysInMonth(month, year);
//     const firstDay = firstDayOfMonth(month, year);
//     const calendar = [];

//     let date = 1;

//     for (let i = 0; i < 6; i++) {
//       const week = [];

//       for (let j = 0; j < 7; j++) {
//         if (i === 0 && j < firstDay) {
//           week.push(<div className="empty"></div>);
//         } else if (date > days) {
//           break;
//         } else {
//           week.push(<div className="date">{date}</div>);
//           date++;
//         }
//       }

//       calendar.push(<div className="week">{week}</div>);
//     }

//     return calendar;
//   };

//   return (
//     <div className="calendar">
//       <div className="header">
//         <button onClick={prevMonth} className="arrow">
//           &lt;
//         </button>
//         <h2 className="title">{`${year}년 ${month + 1}월`}</h2>
//         <button onClick={nextMonth} className="arrow">
//           &gt;
//         </button>
//       </div>
//       <div className="days">
//         <div className="day">일</div>
//         <div className="day">월</div>
//         <div className="day">화</div>
//         <div className="day">수</div>
//         <div className="day">목</div>
//         <div className="day">금</div>
//         <div className="day">토</div>
//       </div>
//       {renderCalendar()}
//     </div>
//   );
// }

// export default Calendar;
