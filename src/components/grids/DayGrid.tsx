import DayUnit from '../units/DayUnit';
import { StyledDayGrid } from '../../styles/Grids.style';
import { DAYS_OF_WEEK_EN } from '../../constants/daysOfWeek';

const DayGrid: React.FC = () => (
  <StyledDayGrid>
    {DAYS_OF_WEEK_EN.map((day) => (
      <DayUnit key={day} day={day} />
    ))}
  </StyledDayGrid>
);

export default DayGrid;
