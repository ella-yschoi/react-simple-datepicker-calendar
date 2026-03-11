import styled from 'styled-components';

type SelectedDateDisplayProps = {
  $displayBackgroundColor?: string;
  $displayFontColor?: string;
};

type YearMonthDisplayProps = {
  $dayFontColor?: string;
};

const StyledSelectedDateDisplay = styled.div<SelectedDateDisplayProps>`
  margin: 20px;
  padding: 25px;
  width: 250px;
  height: 10px;
  background-color: ${(props) => props.$displayBackgroundColor || '#252525'};
  font-size: 14px;
  color: ${(props) => props.$displayFontColor || '#c5c5c5'};
  font-family: inherit, 'Noto Sans KR', sans-serif;
  border-radius: 10px;
  border: 0.5px solid #252525;
`;

const StyledYearMonthDisplay = styled.div<YearMonthDisplayProps>`
  flex: 1;
  margin-left: 5px;
  color: ${(props) => props.$dayFontColor || '#c5c5c5'};
  font-size: 15px;
`;

export { StyledSelectedDateDisplay, StyledYearMonthDisplay };
