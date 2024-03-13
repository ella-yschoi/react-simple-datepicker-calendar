import DayUnit from '../units/DayUnit';
import { StyledDayGrid } from '../../styles/Grids.style';
import { DAYS_OF_WEEK_EN } from '../../constants/daysOfWeek';

type DayGridProps = {
  dayFontColor?: string;
};

const DayGrid: React.FC<DayGridProps> = ({ dayFontColor }) => {
  return (
    <StyledDayGrid>
      {DAYS_OF_WEEK_EN.map((day) => (
        <DayUnit key={day} day={day} $dayFontColor={dayFontColor} />
      ))}
    </StyledDayGrid>
  );
};


export default DayGrid;
