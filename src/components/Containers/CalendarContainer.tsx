import { StyledCalendarContainer } from '../../styles/Containers.style';

type CalendarContainerProps = {
  children: React.ReactNode;
};

const CalendarContainer: React.FC<CalendarContainerProps> = ({ children }) => {
  return <StyledCalendarContainer>{children}</StyledCalendarContainer>;
};

export default CalendarContainer;
