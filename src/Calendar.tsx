import styled from 'styled-components';
import { useState } from 'react';
import { DAYS_OF_WEEK_KO } from './constants/daysOfWeek';

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
  const thisDates = Array.from (
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
  const totalDays = prevDates.length + thisDates.length + nextDates.length;

  // 총 날짜가 42를 넘지 않도록 다음 달 날짜 배열을 조정
  if (totalDays > 42) {
    const excessDays = totalDays - 42;
    nextDates.splice(nextDates.length - excessDays, excessDays); // 초과하는 날짜들을 제거
  }

  return {
    prevMonthDays: prevDates,
    currentMonthDays: thisDates,
    nextMonthDays: nextDates,
  };
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // currentDate이 초기값

  // 날짜 입력 시, 해당 날짜 선택
  const [dateInput, setDateInput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value);
  };

  // 이전 달과 다음 달 버튼의 이벤트 핸들러를 업데이트
  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };
  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // 달력의 날짜들을 가져오기
  const { prevMonthDays, currentMonthDays, nextMonthDays } = renderCalendar(currentDate);

  // YYYY년 MM월 포맷으로 보여주기
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
        <YearMonth>{yearMonth}</YearMonth>
        <LeftButton onClick={handlePreviousMonth} />
        <RightButton onClick={handleNextMonth} />
      </CalendarHeader>
      <DayContainer>
        {DAYS_OF_WEEK_KO.map((day) => (
          <DayComponent key={day}>{day}</DayComponent>
        ))}
      </DayContainer>
      <DateContainer>
        {prevMonthDays.map((date) => (
          <ExtraDateComponent key={`prev-${date}`}>{date}</ExtraDateComponent>
        ))}
        {currentMonthDays.map((date) => (
          <DateComponent key={`current-${date}`}>{date}</DateComponent>
        ))}
        {nextMonthDays.map((date) => (
          <ExtraDateComponent key={`next-${date}`}>{date}</ExtraDateComponent>
        ))}
      </DateContainer>
    </CalendarContainer>
  );
};

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
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(10%, 230%) rotate(-45deg);
  }

  &::after {
    top: 60%;
    left: 30%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(-19%, -50%) rotate(45deg);
  }
`;

const RightButton = styled(ButtonBase)`
  margin-right: -6px;

  &::before {
    top: 20%;
    left: 20%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(10%, 230%) rotate(45deg);
  }

  &::after {
    top: 60%;
    left: 30%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(-19%, -50%) rotate(-45deg);
  }
`;

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const DayComponent = styled.div`
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

const ExtraDateComponent = styled(DateComponent)`
  color: #899797;
`;
