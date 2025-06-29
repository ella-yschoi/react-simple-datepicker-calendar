import {
  StyledLeftButton,
  StyledTodayButton,
  StyledRightButton,
} from '../../styles/Buttons.style';

type ButtonProps = {
  setCurrentDate: (date: Date) => void;
  currentDate?: Date;
};

const LeftButton: React.FC<ButtonProps> = ({ setCurrentDate, currentDate }) => {
  const handlePreviousMonth = () => {
    const safeCurrentDate = currentDate || new Date();
    setCurrentDate(
      new Date(safeCurrentDate.getFullYear(), safeCurrentDate.getMonth() - 1, 1)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePreviousMonth();
    }
  };

  const getAriaLabel = () => {
    const safeCurrentDate = currentDate || new Date();
    const previousMonth = new Date(
      safeCurrentDate.getFullYear(),
      safeCurrentDate.getMonth() - 1,
      1
    );
    const monthName = previousMonth.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    return `Go to previous month: ${monthName}`;
  };

  return (
    <StyledLeftButton
      onClick={handlePreviousMonth}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
      aria-label={getAriaLabel()}
      aria-controls='calendar-grid'
    />
  );
};

const TodayButton: React.FC<ButtonProps> = ({ setCurrentDate }) => {
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToday();
    }
  };

  const today = new Date();
  const todayLabel = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <StyledTodayButton
      onClick={handleToday}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
      aria-label={`Go to today: ${todayLabel}`}
      aria-controls='calendar-grid'
    />
  );
};

const RightButton: React.FC<ButtonProps> = ({
  setCurrentDate,
  currentDate,
}) => {
  const handleNextMonth = () => {
    const safeCurrentDate = currentDate || new Date();
    setCurrentDate(
      new Date(safeCurrentDate.getFullYear(), safeCurrentDate.getMonth() + 1, 1)
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNextMonth();
    }
  };

  const getAriaLabel = () => {
    const safeCurrentDate = currentDate || new Date();
    const nextMonth = new Date(
      safeCurrentDate.getFullYear(),
      safeCurrentDate.getMonth() + 1,
      1
    );
    const monthName = nextMonth.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    return `Go to next month: ${monthName}`;
  };

  return (
    <StyledRightButton
      onClick={handleNextMonth}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
      aria-label={getAriaLabel()}
      aria-controls='calendar-grid'
    />
  );
};

export { LeftButton, TodayButton, RightButton };
