import { StyledCalendarContainer } from '../../styles/Containers.style';

type CalendarContainerProps = {
  children: React.ReactNode;
  $calendarBackgroundColor?: string;
};

const CalendarContainer: React.FC<CalendarContainerProps> = ({ children, $calendarBackgroundColor }) => {
  return <StyledCalendarContainer $calendarBackgroundColor={$calendarBackgroundColor}>{children}</StyledCalendarContainer>;
};

export default CalendarContainer;
