import styled from 'styled-components';

type CalendarInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  $isInputValid: boolean;
};

const StyledCalendarInput = styled.input<CalendarInputProps>`
  width: 228px;
  height: 10px;
  padding: 10px;
  border: 1px solid ${props => (props.$isInputValid ? '#404040' : '#eb5756')};
  border-radius: 8px;
  background: none;
  text-align: left;
  color: #cccccc;
  font-size: 15px;
  
  &::placeholder {
    color: #757575;
  }

  &:focus {
    outline: none;
    border-color: ${props => (props.$isInputValid ? '#2383e2' : '#eb5756')};
  }
`;

export default StyledCalendarInput;
