import {
  StyledSelectedDateDisplay,
  StyledYearMonthDisplay,
} from '../../styles/Displays.style';

const SelectedDateDisplay: React.FC<{ displayDate: string }> = ({
  displayDate,
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
    <StyledSelectedDateDisplay>Date : {formattedDate}</StyledSelectedDateDisplay>
  );
};

const YearMonthDisplay: React.FC<{ displayYearMonth: string }> = ({
  displayYearMonth,
}) => <StyledYearMonthDisplay>{displayYearMonth}</StyledYearMonthDisplay>;

export { SelectedDateDisplay, YearMonthDisplay };
