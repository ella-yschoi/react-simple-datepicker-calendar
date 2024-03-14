import GlobalStyles from './styles/GlobalStyles';
import Calendar from './components';

/**
 * datepicker-calendar Component Props
 *
 * @property {string} [calendarBackgroundColor] - Background color of the entire calendar component. (optional)
 * @property {string} [displayBackgroundColor] - Background color for the display area (e.g., month and year display). (optional)
 * @property {string} [displayFontColor] - Font color for the display area, such as the selected date and year-month header. (optional)
 * @property {string} [dayFontColor] - Font color for the day names (e.g., Sun, Mon) in the calendar. (optional)
 * @property {string} [currentDateFontColor] - Font color for the current date in the calendar. (optional)
 * @property {string} [prevNextDateFontColor] - Font color for the dates of the previous and next month. (optional)
 * 
 */

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Dark */}
      <Calendar
        calendarBackgroundColor={''}
        displayBackgroundColor={''}
        displayFontColor={''}
        dayFontColor={''}
        currentDateFontColor={''}
        prevNextDateFontColor={''}
      />
      {/* Light */}
      <Calendar
        calendarBackgroundColor="#ffffff"
        displayBackgroundColor="#ffffff"
        displayFontColor="#252525"
        dayFontColor="#c5c5c5"
        currentDateFontColor="#252525"
        prevNextDateFontColor="#c5c5c5"
      />
    </>
  );
}

export default App;
