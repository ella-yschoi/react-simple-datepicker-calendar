import { StyledDayUnit } from '../../styles/Units.style';

type DayUnitProps = {
  day: string;
};

const DayUnit: React.FC<DayUnitProps> = ({ day }) => (
  <StyledDayUnit>{day}</StyledDayUnit>
);

export default DayUnit;
