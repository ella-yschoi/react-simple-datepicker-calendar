import { CurrentDateUnit, PrevNextDateUnit } from '../units/DateUnit';
import { StyledDateGrid } from '../../styles/Grids.style';

type DatesGridProps = {
  prevMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
  isToday: (date: number, currentDate: Date) => boolean;
  isSelected: (
    date: number,
    monthOffset: number,
    currentDate: Date,
    selectedDate: Date
  ) => boolean;
  handleDateSelect: (year: number, month: number, day: number) => void;
  currentDate: Date;
  selectedDate: Date;
  currentDateFontColor: string;
  prevNextDateFontColor: string;
};

const DateGrid: React.FC<DatesGridProps> = ({
  prevMonthDays,
  currentMonthDays,
  nextMonthDays,
  isToday,
  isSelected,
  handleDateSelect,
  currentDate,
  selectedDate,
  currentDateFontColor,
  prevNextDateFontColor,
}) => {
  const safeCurrentDate = currentDate || new Date();
  const safeSelectedDate = selectedDate || new Date();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    const currentIndex = Array.from(
      target.parentElement?.children || []
    ).indexOf(target);

    switch (e.key) {
      case 'ArrowLeft': {
        e.preventDefault();
        const prevElement = target.parentElement?.children[
          currentIndex - 1
        ] as HTMLElement;
        if (prevElement && prevElement.tabIndex !== -1) {
          prevElement.focus();
        }
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        const nextElement = target.parentElement?.children[
          currentIndex + 1
        ] as HTMLElement;
        if (nextElement && nextElement.tabIndex !== -1) {
          nextElement.focus();
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const upElement = target.parentElement?.children[
          currentIndex - 7
        ] as HTMLElement;
        if (upElement && upElement.tabIndex !== -1) {
          upElement.focus();
        }
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        const downElement = target.parentElement?.children[
          currentIndex + 7
        ] as HTMLElement;
        if (downElement && downElement.tabIndex !== -1) {
          downElement.focus();
        }
        break;
      }
      case 'Home': {
        e.preventDefault();
        const firstElement = target.parentElement?.children[0] as HTMLElement;
        if (firstElement && firstElement.tabIndex !== -1) {
          firstElement.focus();
        }
        break;
      }
      case 'End': {
        e.preventDefault();
        const lastElement = target.parentElement?.children[
          (target.parentElement?.children.length || 1) - 1
        ] as HTMLElement;
        if (lastElement && lastElement.tabIndex !== -1) {
          lastElement.focus();
        }
        break;
      }
    }
  };

  const getGridAriaLabel = () => {
    const monthName = safeCurrentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
    return `Calendar grid for ${monthName}. Use arrow keys to navigate between dates, Enter or Space to select a date.`;
  };

  return (
    <StyledDateGrid
      role='grid'
      aria-label={getGridAriaLabel()}
      aria-rowcount={6}
      aria-colcount={7}
      onKeyDown={handleKeyDown}
    >
      {prevMonthDays.map((date) => {
        const isSelectedDate = isSelected(
          date,
          -1,
          safeCurrentDate,
          safeSelectedDate
        );
        const isTodayDate = isToday(date, safeCurrentDate);

        return (
          <PrevNextDateUnit
            key={`prev-${date}`}
            className={isSelectedDate ? 'selected' : ''}
            $prevNextDateFontColor={prevNextDateFontColor}
            onClick={() =>
              handleDateSelect(
                safeCurrentDate.getFullYear(),
                safeCurrentDate.getMonth(),
                date
              )
            }
            date={date}
            isSelected={isSelectedDate}
            isToday={isTodayDate}
            isDisabled={false}
            monthType='prev'
            currentDate={safeCurrentDate}
          />
        );
      })}
      {currentMonthDays.map((date) => {
        const todayClass = isToday(date, safeCurrentDate) ? 'today' : '';
        const selectedClass = isSelected(
          date,
          0,
          safeCurrentDate,
          safeSelectedDate
        )
          ? 'selected'
          : '';
        const className = selectedClass ? selectedClass : todayClass;
        const isSelectedDate = isSelected(
          date,
          0,
          safeCurrentDate,
          safeSelectedDate
        );
        const isTodayDate = isToday(date, safeCurrentDate);

        return (
          <CurrentDateUnit
            key={`current-${date}`}
            className={className}
            $currentDateFontColor={currentDateFontColor}
            onClick={() =>
              handleDateSelect(
                safeCurrentDate.getFullYear(),
                safeCurrentDate.getMonth() + 1,
                date
              )
            }
            date={date}
            isSelected={isSelectedDate}
            isToday={isTodayDate}
            isDisabled={false}
            currentDate={safeCurrentDate}
          />
        );
      })}
      {nextMonthDays.map((date) => {
        const isSelectedDate = isSelected(
          date,
          1,
          safeCurrentDate,
          safeSelectedDate
        );
        const isTodayDate = isToday(date, safeCurrentDate);

        return (
          <PrevNextDateUnit
            key={`next-${date}`}
            className={isSelectedDate ? 'selected' : ''}
            $prevNextDateFontColor={prevNextDateFontColor}
            onClick={() =>
              handleDateSelect(
                safeCurrentDate.getFullYear(),
                safeCurrentDate.getMonth() + 2,
                date
              )
            }
            date={date}
            isSelected={isSelectedDate}
            isToday={isTodayDate}
            isDisabled={false}
            monthType='next'
            currentDate={safeCurrentDate}
          />
        );
      })}
    </StyledDateGrid>
  );
};

export default DateGrid;
