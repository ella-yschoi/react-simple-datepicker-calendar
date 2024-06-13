import React from 'react';
import CalendarContainer from './containers/CalendarContainer';
import HeaderContainer from './containers/HeaderContainer';
import CalendarInput from './inputs/Inputs';
import { SelectedDateDisplay, YearMonthDisplay } from './displays/Displays';
import { LeftButton, TodayButton, RightButton } from './buttons/Buttons';
import DayGrid from './grids/DayGrid';
import DateGrid from './grids/DateGrid';

import calculateDate from '../utils/calculateDate';
import handleDateSelect from '../utils/handleDate';
import { isToday, isSelected } from '../utils/selectDate';
import { DAYS_OF_WEEK_EN, DAYS_OF_WEEK_KO } from '../constants/daysOfWeek';

import useCalendar from '../hooks/useCalendar';
import { CalendarProps } from '../types';

const Calendar: React.FC<CalendarProps> = ({
  calendarBackgroundColor = '#252525',
  displayBackgroundColor = '#252525',
  displayFontColor = '#c5c5c5',
  dayFontColor = '#899797',
  currentDateFontColor = '#d5d5d5',
  prevNextDateFontColor = '#899797',
  language = 'en',
  value,
  onChange,
}) => {
  const {
    dateInput,
    setDateInput,
    displayDate,
    isInputValid,
    currentDate,
    handleDateChange,
    handleKeyDown,
    setCurrentDate,
    setDisplayDate,
  } = useCalendar(value);

  const { prevMonthDays, currentMonthDays, nextMonthDays } = calculateDate(currentDate);

  const displayYearMonth = currentDate.toLocaleDateString(language === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'short'
  });

  const daysOfWeek = language === 'ko' ? DAYS_OF_WEEK_KO : DAYS_OF_WEEK_EN;

  const handleDateClick = (year: number, month: number, day: number) => {
    handleDateSelect(year, month, day, setCurrentDate, setDisplayDate, setDateInput);
    onChange(new Date(year, month - 1, day));
  };

  return (
    <>
      <SelectedDateDisplay
        displayDate={displayDate}
        $displayBackgroundColor={displayBackgroundColor}
        $displayFontColor={displayFontColor}
        language={language}
      />
      <CalendarContainer $calendarBackgroundColor={calendarBackgroundColor}>
        <CalendarInput
          dateInput={dateInput}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
          $isInputValid={isInputValid}
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
        <DayGrid
          dayFontColor={dayFontColor}
          daysOfWeek={daysOfWeek}
        />
        <DateGrid
          prevMonthDays={prevMonthDays}
          currentMonthDays={currentMonthDays}
          nextMonthDays={nextMonthDays}
          isToday={isToday}
          isSelected={isSelected}
          handleDateSelect={handleDateClick}
          currentDate={currentDate}
          selectedDate={new Date(displayDate)}
          currentDateFontColor={currentDateFontColor}
          prevNextDateFontColor={prevNextDateFontColor}
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;
