import StyledCalendarInput from '../../styles/Inputs.style';
import DATE_FORMAT from '../../constants/dateFormat';

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
    setDateInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const dateRegex = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
      const isValidFormat = dateRegex.test(dateInput);

      if (isValidFormat) {
        const [yearStr, monthStr, dayStr] = dateInput.split('/');

        const year = parseInt(yearStr, 10);
        const month = parseInt(monthStr, 10);
        const day = parseInt(dayStr, 10);

        const dateObj = new Date(year, month - 1, day);
        const isValidDate =
          dateObj.getFullYear() === year &&
          dateObj.getMonth() === month - 1 &&
          dateObj.getDate() === day;

        if (isValidDate) {
          const formattedDate = `${yearStr.padStart(
            4,
            '0'
          )}/${monthStr.padStart(2, '0')}/${dayStr.padStart(2, '0')}`;
          setDisplayDate(formattedDate);
          setDateInput(formattedDate);
          setIsInputValid(true);
          setCurrentDate(dateObj);
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
        $isInputValid={$isInputValid}
      />
    </>
  );
};

export default CalendarInput;
