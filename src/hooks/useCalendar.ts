import { useState } from 'react';

const useCalendar = (initialDate: Date, onChange?: (newDate: Date) => void) => {
  const [dateInput, setDateInput] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDate, setCurrentDate] = useState(initialDate);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(event.target.value);
    if (!isInputValid) {
      setIsInputValid(true);
      setErrorMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setDateInput('');
      setIsInputValid(true);
      setErrorMessage('');
      (event.target as HTMLInputElement).blur();
      return;
    }

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
          setErrorMessage('');
          setCurrentDate(dateObj);
          onChange?.(dateObj);
        } else {
          setIsInputValid(false);
          setErrorMessage('Invalid date. Please enter a real date.');
        }
      } else {
        setIsInputValid(false);
        setErrorMessage('Use format YYYY/MM/DD.');
      }
    }
  };

  return {
    dateInput,
    displayDate,
    isInputValid,
    errorMessage,
    currentDate,
    handleDateChange,
    handleKeyDown,
    setDisplayDate,
    setDateInput,
    setIsInputValid,
    setCurrentDate,
  };
};

export default useCalendar;
