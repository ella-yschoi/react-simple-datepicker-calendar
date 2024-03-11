import StyledCalendarInput from '../styles/Inputs.style';
import DATE_FORMAT from '../constants/dateFormat';

type CalendarInputProps = {
  dateInput: string;
  setDateInput: React.Dispatch<React.SetStateAction<string>>;
  displayDate: string;
  setDisplayDate: React.Dispatch<React.SetStateAction<string>>;
  setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  $isInputValid: boolean;
};

const CalendarInput: React.FC<CalendarInputProps> = ({
  dateInput,
  setDateInput,
  setDisplayDate,
  setIsInputValid,
  setCurrentDate,
  $isInputValid,
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value); // 입력 필드의 값을 dateInput 상태에 저장
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
          setDisplayDate(formattedDate); // SelectedDateContainer에 표시될 날짜를 업데이트
          setDateInput(formattedDate);
          setIsInputValid(true);
          setCurrentDate(dateObj); // Date 객체를 활용해 현재 날짜 상태를 업데이트
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
      <StyledCalendarInput
        type='text'
        id='date'
        value={dateInput}
        onChange={handleDateChange}
        onKeyDown={handleKeyDown}
        placeholder={DATE_FORMAT}
        $isInputValid={$isInputValid} // 유효성 상태를 props로 전달
      />
    </>
  );
};

export default CalendarInput;
