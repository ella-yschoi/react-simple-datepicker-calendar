const isToday = (date: number, currentDate: Date) => {
  const today = new Date();
  return (
    date === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear()
  );
};

const isSelected = (
  date: number,
  monthOffset: number,
  currentDate: Date,
  selectedDate: Date
) => {
  const adjustedMonth = currentDate.getMonth() + monthOffset;
  return (
    date === selectedDate.getDate() &&
    adjustedMonth === selectedDate.getMonth() &&
    currentDate.getFullYear() === selectedDate.getFullYear()
  );
};

export { isToday, isSelected };
