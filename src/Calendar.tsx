import styled from 'styled-components';
import { useState } from 'react';
import { DAYS_OF_WEEK_KO } from './constants/daysOfWeek';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateInput, setDateInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value);
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1).getDay();

  const dates = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(<DateComponent key={`empty-${i}`} />);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(<DateComponent key={i}>{i}</DateComponent>);
  }

  const yearMonth = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  return (
    <CalendarContainer>
      <CalendarInput
        type='text'
        id='date'
        value={dateInput}
        onChange={handleInputChange}
        placeholder='YYYY/MM/DD'
      />
      <CalendarHeader>
        <YearMonth>
          {yearMonth}
        </YearMonth>
        <LeftButton onClick={handlePreviousMonth}/>
        <RightButton onClick={handleNextMonth}/>
      </CalendarHeader>
      <DayContainer>
        {DAYS_OF_WEEK_KO.map(day => (
          <Day key={day}>{day}</Day>
        ))}
      </DayContainer>
      <DateContainer>
        {dates}
      </DateContainer>
    </CalendarContainer>
  );
}

export default Calendar;

const CalendarContainer = styled.div`
  background-color: #252525;
  border-radius: 10px;
  margin: 5px;
  padding: 25px;
  width: 250px;
  height: 320px;
  max-width: 300px;
  font-family: 'Noto Sans KR';
`;

const CalendarInput = styled.input`
  width: 238px;
  height: 10px;
  padding: 10px 0;
  padding-left: 10px;
  border: 1px solid #404040;
  border-radius: 8px;
  background: none;
  text-align: left;
  color: #cccccc;
  font-size: 15px;

  &::placeholder {
    color: #757575;
  }

  &:focus {
    outline: none;
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

const YearMonth = styled.div`
  margin: 0px 0px 0px 4px;
  color: #c5c5c5;
  font-size: 15px;
`;

const ButtonBase = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 1.875rem;
  height: 1.875rem;
  position: relative;

  &:hover {
    background-color: #313131;
    border-radius: 20%;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #6e6e6e;
    border-radius: 10px;
  }
`;

const LeftButton = styled(ButtonBase)`
  margin-left: 120px;

  &::before {
    top: 19%;
    left: 20%;
    width: .7rem;
    height: .125rem;
    transform: translate(10%, 230%) rotate(-45deg);
  }

  &::after {
    top: 60%;
    left: 30%;
    width: .7rem;
    height: .125rem;
    transform: translate(-19%, -50%) rotate(45deg);
  }
`;

const RightButton = styled(ButtonBase)`
  margin-right: -6px;

  &::before {
    top: 20%;
    left: 20%;
    width: .7rem;
    height: .125rem;
    transform: translate(10%, 230%) rotate(45deg);
  }

  &::after {
    top: 60%;
    left: 30%;
    width: .7rem;
    height: .125rem;
    transform: translate(-19%, -50%) rotate(-45deg);
  }
`;

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  width: 15px;
  height: 10px;
  font-size: 14px;
  color: #899797;
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

const DateComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  font-size: 14px;
  color: #d5d5d5;

  &:hover {
    cursor: pointer;
    background-color: #2383e2;
    border-radius: 20%;
  }
`;

