import styled from 'styled-components';
import { useState } from 'react';
import { DAYS_OF_WEEK_KO } from './constants/daysOfWeek';

type StyledCalendarInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  $isInputValid: boolean;
};

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
  const [dateInput, setDateInput] = useState(''); // 사용자의 입력 추적
  const [displayDate, setDisplayDate] = useState(''); // 화면에 표시할 날짜
  const [$isInputValid, setIsInputValid] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date()); // currentDate이 초기값

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

  // YYYY년 MM월 형태
  const yearMonth = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value); // 입력 필드의 값을 dateInput 상태에 저장
  }

  const handleKeyDown= (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const dateRegex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
      const isValidFormat = dateRegex.test(dateInput)

      if (isValidFormat) {
        // 입력된 날짜에서 년, 월, 일을 추출
        const [yearStr, monthStr, dayStr] = dateInput.split('/');
        // 년, 월, 일을 숫자로 변환
        const year = parseInt(yearStr, 10);
        const month = parseInt(monthStr, 10);
        const day = parseInt(dayStr, 10);
  
        // 날짜 객체를 생성하여 유효성 검사
        const dateObj = new Date(year, month - 1, day);
        const isValidDate =
          dateObj.getFullYear() === year &&
          dateObj.getMonth() === month - 1 &&
          dateObj.getDate() === day;
        
        if (isValidDate) {
          // 포맷팅된 날짜로 상태 업데이트
          const formattedDate = `${yearStr.padStart(4, '0')}/${monthStr.padStart(2, '0')}/${dayStr.padStart(2, '0')}`;
          setDisplayDate(formattedDate); // DateInputContainer에 표시될 날짜를 업데이트
          setDateInput(formattedDate);
          setIsInputValid(true);
        } else {
          alert('유효하지 않은 날짜입니다. 올바른 날짜를 입력해 주세요.');
          setIsInputValid(false);
        }
      } else {
        alert('유효하지 않은 형식입니다. YYYY/MM/DD 형식으로 입력해 주세요.');
        setIsInputValid(false);
      }
    }
  };  

  return (
    <>
      <DateInputContainer>
        Date : {displayDate}
      </DateInputContainer>
      <CalendarContainer>
        <StyledCalendarInput
          type='text'
          id='date'
          value={dateInput}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
          placeholder='YYYY/MM/DD'
          $isInputValid={$isInputValid} // 유효성 상태를 props로 전달
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
    </>
  );
};

export default Calendar;

const DateInputContainer = styled.div`
  margin: 5px;
  padding: 25px 25px 25px 28px;
  width: 247px;
  height: 10px;
  background-color: #252525;
  border-radius: 10px;
  font-size: 15px;
  color: #c5c5c5;
  font-family: 'Noto Sans KR';
`;

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

const StyledCalendarInput = styled.input<StyledCalendarInputProps>`
  width: 228px;
  height: 10px;
  padding: 10px;
  border: 1px solid ${props => (props.$isInputValid ? '#404040' : '#eb5756')};
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
    border-color: ${props => (props.$isInputValid ? '#2383e2' : '#eb5756')};
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
