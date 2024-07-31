import { Dispatch, SetStateAction, useState } from 'react';

export interface CalendarState {
  dateInput: string;
  setDateInput: Dispatch<SetStateAction<string>>;
  displayDate: string;
  setDisplayDate: Dispatch<SetStateAction<string>>;
  isInputValid: boolean;
  setIsInputValid: Dispatch<SetStateAction<boolean>>;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const useCalendar = (initialDate: Date): CalendarState => {
  const [dateInput, setDateInput] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [currentDate, setCurrentDate] = useState(initialDate);

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
          const formattedDate = `${yearStr.padStart(4, '0')}/${monthStr.padStart(2, '0')}/${dayStr.padStart(2, '0')}`;
          setDisplayDate(formattedDate);
          setDateInput(formattedDate);
          setIsInputValid(true);
          setCurrentDate(dateObj);
        } else setIsInputValid(false);
      } else setIsInputValid(false);
    }
  };

  return {
    dateInput,
    setDateInput,
    displayDate,
    setDisplayDate,
    isInputValid,
    setIsInputValid,
    currentDate,
    setCurrentDate,
    handleDateChange,
    handleKeyDown,
  };
};

export default useCalendar;
