import {
  StyledSelectedDateDisplay,
  StyledYearMonthDisplay,
} from '../../styles/Displays.style';

type SelectedDateDisplayProps = {
  displayDate: string;
  $displayBackgroundColor?: string;
  $displayFontColor?: string;
};

const SelectedDateDisplay: React.FC<SelectedDateDisplayProps> = ({
  displayDate,
  $displayBackgroundColor,
  $displayFontColor
}) => {

  const dateParts = displayDate.split('/').map(part => parseInt(part, 10));
  const dateObject = displayDate
    ? new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
    : null;

  const isValidDate = dateObject && !isNaN(dateObject.getTime());

  let formattedDate = '';
  if (isValidDate) {
    formattedDate = dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <StyledSelectedDateDisplay 
      $displayBackgroundColor={$displayBackgroundColor} 
      $displayFontColor={$displayFontColor}
    >
      Date : {formattedDate}
    </StyledSelectedDateDisplay>
  );
};

const YearMonthDisplay: React.FC<{ displayYearMonth: string }> = ({
  displayYearMonth,
}) => <StyledYearMonthDisplay>{displayYearMonth}</StyledYearMonthDisplay>;

export { SelectedDateDisplay, YearMonthDisplay };
