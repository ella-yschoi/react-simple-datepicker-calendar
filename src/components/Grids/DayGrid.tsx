import DayUnit from '../Units/DayUnit';
import { StyledDayGrid } from '../../styles/Grids.style';
import { DAYS_OF_WEEK_KO } from '../../constants/daysOfWeek';

const DayGrid: React.FC = () => (
  <StyledDayGrid>
    {DAYS_OF_WEEK_KO.map((day) => (
      <DayUnit key={day} day={day} />
    ))}
  </StyledDayGrid>
);

export default DayGrid;
