import { useState } from 'react';

import CalendarContainer from './containers/CalendarContainer';
import HeaderContainer from './containers/HeaderContainer';
import CalendarInput from './inputs/Inputs';
import { SelectedDateDisplay, YearMonthDisplay } from './displays/Displays';
import { LeftButton, TodayButton, RightButton } from './buttons/Butttons';
import DayGrid from './grids/DayGrid';
import DateGrid from './grids/DateGrid';

import calculateDate from '../utils/calculateDate';
import handleDateSelect from '../utils/handleDate';
import { isToday, isSelected } from '../utils/selectDate';

const Calendar: React.FC = () => {
  const [dateInput, setDateInput] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [$isInputValid, setIsInputValid] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const { prevMonthDays, currentMonthDays, nextMonthDays } =
    calculateDate(currentDate);
    
  const displayYearMonth = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

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
          handleDateSelect={(year, month, day) => 
            handleDateSelect(year, month, day, setCurrentDate, setDisplayDate, setDateInput)
          }
          currentDate={currentDate}
          selectedDate={new Date(displayDate)}
        />
      </CalendarContainer>
    </>
  );
};

export default Calendar;
