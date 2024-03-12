const handleDateSelect = (
  year: number, 
  month: number, 
  day: number, 
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>,
  setDisplayDate: React.Dispatch<React.SetStateAction<string>>,
  setDateInput: React.Dispatch<React.SetStateAction<string>>
) => {
  let updatedYear = year;
  let updatedMonth = month - 1;

  if (month === 0) {
    updatedYear = year - 1;
    updatedMonth = 11;
  }

  if (month === 13) {
    updatedYear = year + 1;
    updatedMonth = 0;
  }

  const updatedDate = new Date(updatedYear, updatedMonth, day);
  setCurrentDate(updatedDate);

  const formattedMonth = updatedMonth + 1 < 10 ? `0${updatedMonth + 1}` : `${updatedMonth + 1}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedDate = `${updatedYear}/${formattedMonth}/${formattedDay}`;

  setDisplayDate(formattedDate);
  setDateInput(formattedDate);
};

export default handleDateSelect;
