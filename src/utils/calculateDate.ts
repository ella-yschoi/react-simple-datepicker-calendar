const calculateDate = (currentDate: Date) => {
  const showYear = currentDate.getFullYear();
  const showMonth = currentDate.getMonth();

  const prevMonthLast = new Date(showYear, showMonth, 0);
  const currentMonthLast = new Date(showYear, showMonth + 1, 0);

  const prevMonthLastDate = prevMonthLast.getDate();
  const prevMonthLastDay = prevMonthLast.getDay();

  const currentMonthLastDate = currentMonthLast.getDate();
  const currentMonthLastDay = currentMonthLast.getDay();

  const prevDates = [];
  if (prevMonthLastDay !== 6) {
    for (let i = 0; i < prevMonthLastDay + 1; i++) {
      prevDates.unshift(prevMonthLastDate - i);
    }
  }

  const currentDates = Array.from(
    { length: currentMonthLastDate },
    (_, i) => i + 1
  );

  const nextDates = [];
  const firstDayNextMonth = (currentMonthLastDay + 1) % 7;
  for (let i = 1; i <= 14 - firstDayNextMonth; i++) {
    nextDates.push(i);
  }

  if (nextDates.length < 7) {
    for (let i = 7 - firstDayNextMonth; i < 14 - firstDayNextMonth; i++) {
      nextDates.push(i);
    }
  }

  const totalDays = prevDates.length + currentDates.length + nextDates.length;

  if (totalDays > 42) {
    const excessDays = totalDays - 42;
    nextDates.splice(nextDates.length - excessDays, excessDays);
  }

  return {
    prevMonthDays: prevDates,
    currentMonthDays: currentDates,
    nextMonthDays: nextDates,
  };
};

export default calculateDate;