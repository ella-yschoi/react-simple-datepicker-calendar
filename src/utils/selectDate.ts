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
  const adjusted = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthOffset,
    date
  );
  return (
    adjusted.getDate() === selectedDate.getDate() &&
    adjusted.getMonth() === selectedDate.getMonth() &&
    adjusted.getFullYear() === selectedDate.getFullYear()
  );
};

export { isToday, isSelected };
