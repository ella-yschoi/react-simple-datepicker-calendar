import { StyledCalendarContainer } from '../../styles/Containers.style';

type CalendarContainerProps = {
  children: React.ReactNode;
};

const CalendarContainer: React.FC<CalendarContainerProps> = ({ children }) => {
  return <StyledCalendarContainer $calendarBackgroundColor="#252525">{children}</StyledCalendarContainer>;
};

export default CalendarContainer;
