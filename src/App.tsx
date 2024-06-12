import { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Calendar from './components';
import { CalendarProps } from './types';

/**
 * datepicker-calendar Component Props
 * @property {string} [calendarBackgroundColor] - Background color of the entire calendar component. (optional)
 * @property {string} [displayBackgroundColor] - Background color for the display area (e.g., month and year display). (optional)
 * @property {string} [displayFontColor] - Font color for the display area, such as the selected date and year-month header. (optional)
 * @property {string} [dayFontColor] - Font color for the day names (e.g., Sun, Mon) in the calendar. (optional)
 * @property {string} [currentDateFontColor] - Font color for the current date in the calendar. (optional)
 * @property {string} [prevNextDateFontColor] - Font color for the dates of the previous and next month. (optional)
 * @property {string} [language] - Language settings for the calendar. Supported values are 'en' for English and 'ko' for Korean. (optional)
 * @property {Date} value - The currently selected date.
 * @property {function} onChange - Function to call when the date is changed.
 */

const App: React.FC<Omit<CalendarProps, 'value' | 'onChange'>> = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  return (
    <>
      <GlobalStyles />
      <Calendar
        {...props}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </>
  );
};

export default App;
