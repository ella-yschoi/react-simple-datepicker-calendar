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
}) => (
  <StyledDateGrid>
    {prevMonthDays.map((date) => (
      <PrevNextDateUnit
        key={`prev-${date}`}
        className={
          isSelected(date, -1, currentDate, selectedDate) ? 'selected' : ''
        }
        $prevNextDateFontColor={prevNextDateFontColor}
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
      const todayClass = isToday(date, currentDate) ? 'today' : '';
      const selectedClass = isSelected(date, 0, currentDate, selectedDate)
        ? 'selected'
        : '';
      const className = selectedClass ? selectedClass : todayClass;
      return (
        <CurrentDateUnit
          key={`current-${date}`}
          className={className}
          $currentDateFontColor={currentDateFontColor}
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
      <PrevNextDateUnit
        key={`next-${date}`}
        className={
          isSelected(date, -1, currentDate, selectedDate) ? 'selected' : ''
        }
        $prevNextDateFontColor={prevNextDateFontColor}
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
