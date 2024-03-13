import styled from 'styled-components';

type SelectedDateDisplayProps = {
  displayBackgroundColor?: string;
  displayFontColor?: string;
};

const StyledSelectedDateDisplay = styled.div<SelectedDateDisplayProps>`
  margin: 5px;
  padding: 25px 25px 25px 28px;
  width: 247px;
  height: 10px;
  background-color: ${props => props.displayBackgroundColor || '#252525'};
  border-radius: 10px;
  font-size: 14px;
  color: ${props => props.displayFontColor || '#c5c5c5'};
  font-family: 'Noto Sans KR';
`;


const StyledYearMonthDisplay = styled.div`
  flex: 1;
  margin-left: 5px;
  color: #c5c5c5;
  font-size: 15px;
`;

export { StyledSelectedDateDisplay, StyledYearMonthDisplay }
