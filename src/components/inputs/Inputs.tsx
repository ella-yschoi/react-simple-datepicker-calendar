import StyledCalendarInput from '../../styles/Inputs.style';
import DATE_FORMAT from '../../constants/dateFormat';

type CalendarInputProps = {
  dateInput: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  $isInputValid: boolean;
};

const CalendarInput: React.FC<CalendarInputProps> = ({
  dateInput,
  onChange,
  onKeyDown,
  $isInputValid,
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
      />
    </>
  );
};

export default CalendarInput;
