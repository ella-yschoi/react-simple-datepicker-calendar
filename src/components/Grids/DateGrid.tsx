import { DateUnit, ExtraDateUnit } from '../Units/DateUnit';
import { StyledDateGrid } from '../../styles/Grids.style';

type DatesGridProps = {
  prevMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
  isToday: (date: number) => boolean;
  isSelected: (date: number, monthOffset: number) => boolean;
  handleDateSelect: (year: number, month: number, day: number) => void;
  currentDate: Date;
};

const DateGrid: React.FC<DatesGridProps> = ({
  prevMonthDays,
  currentMonthDays,
  nextMonthDays,
  isToday,
  isSelected,
  handleDateSelect,
  currentDate,
}) => (
  <StyledDateGrid>
    {prevMonthDays.map((date) => (
      <ExtraDateUnit
        key={`prev-${date}`}
        className={isSelected(date, -1) ? 'selected' : ''}
        onClick={() =>
          handleDateSelect(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            date
          )
        }
        date={date}
      />
    ))}
    {currentMonthDays.map((date) => {
      const todayClass = isToday(date) ? 'today' : '';
      const selectedClass = isSelected(date, 0) ? 'selected' : '';
      const className = selectedClass ? selectedClass : todayClass;
      return (
        <DateUnit
          key={`current-${date}`}
          className={className}
          onClick={() =>
            handleDateSelect(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              date
            )
          }
          date={date}
        />
      );
    })}
    {nextMonthDays.map((date) => (
      <ExtraDateUnit
        key={`next-${date}`}
        className={isSelected(date, 1) ? 'selected' : ''}
        onClick={() =>
          handleDateSelect(
            currentDate.getFullYear(),
            currentDate.getMonth() + 2,
            date
          )
        }
        date={date}
      />
    ))}
  </StyledDateGrid>
);

export default DateGrid;
