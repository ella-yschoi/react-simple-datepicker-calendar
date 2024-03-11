import { useState } from 'react';

import CalendarContainer from './Containers/CalendarContainer';
import HeaderContainer from './Containers/HeaderContainer';
import CalendarInput from './Inputs';
import { SelectedDateDisplay, YearMonthDisplay } from './Displays';
import { LeftButton, TodayButton, RightButton } from './Butttons';
import DayGrid from './Grids/DayGrid';
import DateGrid from './Grids/DateGrid';

const renderCalendar = (currentDate: Date) => {
  const showYear = currentDate.getFullYear();
  const showMonth = currentDate.getMonth();

  const prevMonthLast = new Date(showYear, showMonth, 0);
  const currentMonthLast = new Date(showYear, showMonth + 1, 0);

  const prevMonthLastDate = prevMonthLast.getDate();
  const prevMonthLastDay = prevMonthLast.getDay();

  const currentMonthLastDate = currentMonthLast.getDate();
  const currentMonthLastDay = currentMonthLast.getDay();

  // 이전 달의 날짜들을 계산
  const prevDates = [];
  if (prevMonthLastDay !== 6) {
    for (let i = 0; i < prevMonthLastDay + 1; i++) {
      prevDates.unshift(prevMonthLastDate - i);
    }
  }

  // 현재 달의 날짜들을 계산
  const currentDates = Array.from(
    { length: currentMonthLastDate },
    (_, i) => i + 1
  );

  // 다음 달 날짜들을 계산
  const nextDates = [];
  // 다음 달의 첫 번째 날짜가 시작할 요일을 구하기
  const firstDayNextMonth = (currentMonthLastDay + 1) % 7;
  // 최소한 한 주를 채우고, 필요한 경우 두 번째 주까지 날짜를 추가
  for (let i = 1; i <= 14 - firstDayNextMonth; i++) {
    nextDates.push(i);
  }

  // 만약 다음 달 날짜가 7개 미만이라면, 다음 주까지 날짜를 14개 추가
  if (nextDates.length < 7) {
    for (let i = 7 - firstDayNextMonth; i < 14 - firstDayNextMonth; i++) {
      nextDates.push(i);
    }
  }

  // 이전 달, 현재 달, 다음 달 날짜를 합쳐 총 날짜 수를 계산
  const totalDays = prevDates.length + currentDates.length + nextDates.length;

  // 총 날짜가 42를 넘지 않도록 다음 달 날짜 배열을 조정
  if (totalDays > 42) {
    const excessDays = totalDays - 42;
    nextDates.splice(nextDates.length - excessDays, excessDays); // 초과하는 날짜들을 제거
  }

  return {
    prevMonthDays: prevDates,
    currentMonthDays: currentDates,
    nextMonthDays: nextDates,
  };
};

const Calendar = () => {
  const [dateInput, setDateInput] = useState(''); // 사용자의 입력 추적
  const [displayDate, setDisplayDate] = useState(''); // 화면에 표시할 날짜
  const [$isInputValid, setIsInputValid] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date()); // currentDate이 초기값

  // 오늘 날짜를 확인하는 함수
  const isToday = (date: number) => {
    const today = new Date();
    return (
      date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  // 사용자가 선택한 날짜를 확인 후 업데이트
  const isSelected = (date: number, monthOffset: number) => {
    const selectedDate = new Date(displayDate);
    const adjustedMonth = currentDate.getMonth() + monthOffset;

    return (
      date === selectedDate.getDate() &&
      adjustedMonth === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  // 달력의 날짜들을 가져오기
  const { prevMonthDays, currentMonthDays, nextMonthDays } =
    renderCalendar(currentDate);

  // YYYY년 MM월 형태
  const displayYearMonth = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  const handleDateSelect = (year: number, month: number, day: number) => {
    let updatedYear = year;
    let updatedMonth = month - 1; // JavaScript의 Date 객체는 0부터 11까지 월을 나타냄

    // 이전 달 날짜 클릭 시 년/월 조정
    if (month === 0) {
      updatedYear = year - 1;
      updatedMonth = 11; // 12월
    }

    // 다음 달 날짜 클릭 시 년/월 조정
    if (month === 13) {
      updatedYear = year + 1;
      updatedMonth = 0; // 1월
    }

    const updatedDate = new Date(updatedYear, updatedMonth, day);
    setCurrentDate(updatedDate);

    // 포맷팅된 날짜로 상태 업데이트
    const formattedMonth =
      updatedMonth + 1 < 10 ? `0${updatedMonth + 1}` : `${updatedMonth + 1}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedDate = `${updatedYear}/${formattedMonth}/${formattedDay}`;

    setDisplayDate(formattedDate);
    setDateInput(formattedDate);
  };

  return (
    <>
      <SelectedDateDisplay displayDate={displayDate} />
      <CalendarContainer>
        <CalendarInput
          dateInput={dateInput}
          setDateInput={setDateInput}
          displayDate={displayDate}
          setDisplayDate={setDisplayDate}
          setIsInputValid={setIsInputValid}
          setCurrentDate={setCurrentDate}
          $isInputValid={$isInputValid}
        />
        <HeaderContainer>
          <YearMonthDisplay displayYearMonth={displayYearMonth} />
          <LeftButton
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
          <TodayButton setCurrentDate={setCurrentDate} />
          <RightButton
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        </HeaderContainer>
        <DayGrid />
        <DateGrid
          prevMonthDays={prevMonthDays}
          currentMonthDays={currentMonthDays}
          nextMonthDays={nextMonthDays}
          isToday={isToday}
          isSelected={isSelected}
          handleDateSelect={handleDateSelect}
          currentDate={currentDate}
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;
