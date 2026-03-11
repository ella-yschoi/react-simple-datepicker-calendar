import styled from 'styled-components';
import StyledCalendarInput from '../../styles/Inputs.style';
import DATE_FORMAT from '../../constants/dateFormat';

type CalendarInputProps = {
  dateInput: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  $isInputValid: boolean;
  errorMessage?: string;
};

const ErrorText = styled.span`
  display: block;
  color: #eb5756;
  font-size: 12px;
  margin-top: 4px;
  min-height: 16px;
`;

const CalendarInput: React.FC<CalendarInputProps> = ({
  dateInput,
  onChange,
  onKeyDown,
  $isInputValid,
  errorMessage,
}) => {
  return (
    <>
      <StyledCalendarInput
        type='text'
        id='date'
        value={dateInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={DATE_FORMAT}
        $isInputValid={$isInputValid}
        aria-invalid={!$isInputValid}
        aria-describedby={!$isInputValid ? 'date-error' : undefined}
      />
      {!$isInputValid && errorMessage && (
        <ErrorText id='date-error' role='alert'>
          {errorMessage}
        </ErrorText>
      )}
    </>
  );
};

export default CalendarInput;
