import DayUnit from '../units/DayUnit';
import { StyledDayGrid } from '../../styles/Grids.style';

type DayGridProps = {
  dayFontColor?: string;
  daysOfWeek: string[];
};

const DayGrid: React.FC<DayGridProps> = ({ dayFontColor, daysOfWeek }) => {
  return (
    <StyledDayGrid>
      {daysOfWeek.map((day) => (
        <DayUnit key={day} day={day} $dayFontColor={dayFontColor} />
      ))}
    </StyledDayGrid>
  );
};

export default DayGrid;
