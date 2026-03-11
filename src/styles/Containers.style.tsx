import styled from 'styled-components';

type CalendarContainerProps = {
  $calendarBackgroundColor?: string;
};

const StyledCalendarContainer = styled.div<CalendarContainerProps>`
  background-color: ${props => props.$calendarBackgroundColor || '#252525'};
  margin: 20px;
  padding: 25px;
  width: 250px;
  height: 323px;
  max-width: 300px;
  font-family: inherit, 'Noto Sans KR', sans-serif;
  border-radius: 10px;
  border: 0.5px solid #252525;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0px;
`;

export { StyledCalendarContainer, StyledHeaderContainer };
