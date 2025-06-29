import {
  StyledCurrentDateUnit,
  StyledPrevNextDateUnit,
} from '../../styles/Units.style';

interface DateUnitProps {
  className?: string;
  onClick: () => void;
  date: number;
  $currentDateFontColor?: string;
  $prevNextDateFontColor?: string;
  // Accessibility props
  isSelected?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  monthType?: 'current' | 'prev' | 'next';
  currentDate?: Date;
}

const CurrentDateUnit: React.FC<DateUnitProps> = ({
  className,
  onClick,
  date,
  $currentDateFontColor,
  isSelected = false,
  isToday = false,
  isDisabled = false,
  currentDate = new Date(),
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isDisabled) {
        onClick();
      }
    }
  };

  const getAriaLabel = () => {
    const dateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      date
    );
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let label = `Select date ${formattedDate}`;
    if (isToday) label += ' (today)';
    if (isSelected) label += ' (selected)';
    if (isDisabled) label += ' (disabled)';

    return label;
  };

  return (
    <StyledCurrentDateUnit
      className={className}
      onClick={isDisabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      $currentDateFontColor={$currentDateFontColor}
      role='button'
      tabIndex={isDisabled ? -1 : 0}
      aria-label={getAriaLabel()}
      aria-selected={isSelected}
      aria-current={isToday ? 'date' : undefined}
      aria-disabled={isDisabled}
      aria-pressed={isSelected}
    >
      {date}
    </StyledCurrentDateUnit>
  );
};

const PrevNextDateUnit: React.FC<DateUnitProps> = ({
  className,
  onClick,
  date,
  $prevNextDateFontColor,
  isSelected = false,
  isDisabled = false,
  monthType = 'prev',
  currentDate = new Date(),
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isDisabled) {
        onClick();
      }
    }
  };

  const getAriaLabel = () => {
    const monthOffset = monthType === 'prev' ? -1 : 1;
    const dateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      date
    );
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let label = `Select date ${formattedDate} (${monthType} month)`;
    if (isSelected) label += ' (selected)';
    if (isDisabled) label += ' (disabled)';

    return label;
  };

  return (
    <StyledPrevNextDateUnit
      className={className}
      onClick={isDisabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      $prevNextDateFontColor={$prevNextDateFontColor}
      role='button'
      tabIndex={isDisabled ? -1 : 0}
      aria-label={getAriaLabel()}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      aria-pressed={isSelected}
    >
      {date}
    </StyledPrevNextDateUnit>
  );
};

export { CurrentDateUnit, PrevNextDateUnit };
