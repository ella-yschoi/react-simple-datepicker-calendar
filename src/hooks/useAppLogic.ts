import { useState } from 'react';

const useAppLogic = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  return {
    selectedDate,
    handleDateChange,
  };
};

export default useAppLogic;
