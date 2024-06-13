export interface CalendarProps {
  calendarBackgroundColor?: string;
  displayBackgroundColor?: string;
  displayFontColor?: string;
  dayFontColor?: string;
  currentDateFontColor?: string;
  prevNextDateFontColor?: string;
  language?: 'en'|'ko';
  value: Date;
  onChange: (newDate: Date) => void;
}
