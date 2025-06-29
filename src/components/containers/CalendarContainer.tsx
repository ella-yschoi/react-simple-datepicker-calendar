import { StyledCalendarContainer } from '../../styles/Containers.style';

type CalendarContainerProps = {
  children: React.ReactNode;
  $calendarBackgroundColor?: string;
  selectedDate?: Date;
  currentDate?: Date;
};

const CalendarContainer: React.FC<CalendarContainerProps> = ({
  children,
  $calendarBackgroundColor,
  selectedDate,
  currentDate,
}) => {
  const getAriaLabel = () => {
    const safeCurrentDate = currentDate || new Date();
    const monthName = safeCurrentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    let label = `Calendar for ${monthName}`;

    if (selectedDate) {
      const selectedText = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      label += `. Selected date: ${selectedText}`;
    }

    return label;
  };

  return (
    <StyledCalendarContainer
      $calendarBackgroundColor={$calendarBackgroundColor}
      role='application'
      aria-label={getAriaLabel()}
      aria-describedby='calendar-instructions'
    >
      <div id='calendar-instructions' className='sr-only'>
        This is a calendar widget. Use the arrow keys to navigate between dates.
        Press Enter or Space to select a date. Use the previous and next month
        buttons to change months.
      </div>
      {children}
    </StyledCalendarContainer>
  );
};

export default CalendarContainer;
