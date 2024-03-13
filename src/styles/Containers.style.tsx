import styled from 'styled-components';

type CalendarContainerProps = {
  $calendarBackgroundColor?: string;
};

const StyledCalendarContainer = styled.div<CalendarContainerProps>`
  background-color: ${props => props.$calendarBackgroundColor || '#252525'};
  border-radius: 10px;
  margin: 5px;
  padding: 25px;
  width: 250px;
  height: 323px;
  max-width: 300px;
  font-family: 'Noto Sans KR';
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

export { StyledCalendarContainer, StyledHeaderContainer };
