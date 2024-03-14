import styled from 'styled-components';

type SelectedDateDisplayProps = {
  $displayBackgroundColor?: string;
  $displayFontColor?: string;
};

const StyledSelectedDateDisplay = styled.div<SelectedDateDisplayProps>`
  margin: 20px;
  padding: 25px 25px 25px 28px;
  width: 247px;
  height: 10px;
  background-color: ${props => props.$displayBackgroundColor || '#252525'};
  font-size: 14px;
  color: ${props => props.$displayFontColor || '#c5c5c5'};
  font-family: 'Noto Sans KR';
  border-radius: 10px;
  border: 0.5px solid #252525;
`;


const StyledYearMonthDisplay = styled.div`
  flex: 1;
  margin-left: 5px;
  color: #c5c5c5;
  font-size: 15px;
`;

export { StyledSelectedDateDisplay, StyledYearMonthDisplay }
