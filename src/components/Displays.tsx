import { StyledSelectedDateDisplay, StyledYearMonthDisplay } from '../styles/Displays.style';

const SelectedDateDisplay: React.FC<{ displayDate: string }> = ({ displayDate }) => (
  <StyledSelectedDateDisplay>
    날짜 : {displayDate}
  </StyledSelectedDateDisplay>
);

const YearMonthDisplay: React.FC<{ displayYearMonth: string }> = ({ displayYearMonth }) => (
  <StyledYearMonthDisplay>
    {displayYearMonth}
  </StyledYearMonthDisplay>
);

export { SelectedDateDisplay, YearMonthDisplay };