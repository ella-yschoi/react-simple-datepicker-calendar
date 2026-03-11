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
  className,
  style,
  onMonthChange,
}) => {
  const {
    dateInput,
    setDateInput,
    displayDate,
    isInputValid,
    errorMessage,
    currentDate,
    handleDateChange,
    handleKeyDown,
    setCurrentDate,
    setDisplayDate,
  } = useCalendar(value, onChange);

  const { prevMonthDays, currentMonthDays, nextMonthDays } =
    calculateDate(currentDate);

  const daysOfWeek = language === 'ko' ? DAYS_OF_WEEK_KO : DAYS_OF_WEEK_EN;

  const handleDateClick = (year: number, month: number, day: number) => {
    handleDateSelect(
      year,
      month,
      day,
      setCurrentDate,
      setDisplayDate,
      setDateInput
    );
    onChange(new Date(year, month - 1, day));
  };

  // Convert displayDate string to Date object for SelectedDateDisplay
  const selectedDate = displayDate
    ? new Date(displayDate)
    : value || new Date();

  return (
    <div className={className} style={style}>
      <SelectedDateDisplay
        selectedDate={selectedDate}
        displayBackgroundColor={displayBackgroundColor}
        displayFontColor={displayFontColor}
      />
      <CalendarContainer
        $calendarBackgroundColor={calendarBackgroundColor}
        selectedDate={selectedDate}
        currentDate={currentDate}
      >
        <CalendarInput
          dateInput={dateInput}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
          $isInputValid={isInputValid}
          errorMessage={errorMessage}
        />
        <HeaderContainer>
          <YearMonthDisplay
            currentDate={currentDate}
            dayFontColor={dayFontColor}
          />
          <LeftButton
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            onMonthChange={onMonthChange}
          />
          <TodayButton
            setCurrentDate={setCurrentDate}
            onMonthChange={onMonthChange}
          />
          <RightButton
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            onMonthChange={onMonthChange}
          />
        </HeaderContainer>
        <DayGrid dayFontColor={dayFontColor} daysOfWeek={daysOfWeek} />
        <DateGrid
          prevMonthDays={prevMonthDays}
          currentMonthDays={currentMonthDays}
          nextMonthDays={nextMonthDays}
          isToday={isToday}
          isSelected={isSelected}
          handleDateSelect={handleDateClick}
          currentDate={currentDate}
          selectedDate={selectedDate}
          currentDateFontColor={currentDateFontColor}
          prevNextDateFontColor={prevNextDateFontColor}
        />
      </CalendarContainer>
    </div>
  );
};

export default Calendar;
