import {
  StyledSelectedDateDisplay,
  StyledYearMonthDisplay,
} from '../../styles/Displays.style';

type SelectedDateDisplayProps = {
  selectedDate: Date;
  displayBackgroundColor?: string;
  displayFontColor?: string;
};

type YearMonthDisplayProps = {
  currentDate: Date;
  dayFontColor?: string;
};

// Screen reader announcements component
const LiveRegion: React.FC<{ announcement: string }> = ({ announcement }) => (
  <div
    aria-live='polite'
    aria-atomic='true'
    className='sr-only'
    style={{
      position: 'absolute',
      left: '-10000px',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    }}
  >
    {announcement}
  </div>
);

const SelectedDateDisplay: React.FC<SelectedDateDisplayProps> = ({
  selectedDate,
  displayBackgroundColor,
  displayFontColor,
}) => {
  const safeDate = selectedDate || new Date();

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const selectedDateText = formatSelectedDate(safeDate);

  return (
    <>
      <StyledSelectedDateDisplay
        $displayBackgroundColor={displayBackgroundColor}
        $displayFontColor={displayFontColor}
        role='status'
        aria-label={`Selected date: ${selectedDateText}`}
      >
        {safeDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}
      </StyledSelectedDateDisplay>
      <LiveRegion announcement={`Date selected: ${selectedDateText}`} />
    </>
  );
};

const YearMonthDisplay: React.FC<YearMonthDisplayProps> = ({
  currentDate,
  dayFontColor,
}) => {
  const safeDate = currentDate || new Date();

  const formatYearMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const yearMonthText = formatYearMonth(safeDate);

  return (
    <StyledYearMonthDisplay
      $dayFontColor={dayFontColor}
      role='heading'
      aria-level={2}
      aria-label={`Current month and year: ${yearMonthText}`}
    >
      {yearMonthText}
    </StyledYearMonthDisplay>
  );
};

export { SelectedDateDisplay, YearMonthDisplay, LiveRegion };
