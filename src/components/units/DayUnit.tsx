import { StyledDayUnit } from '../../styles/Units.style';

type DayUnitProps = {
  day: string;
  $dayFontColor?: string;
};

const DayUnit: React.FC<DayUnitProps> = ({ day, $dayFontColor }) => (
  <StyledDayUnit $dayFontColor={$dayFontColor}>{day}</StyledDayUnit>
);

export default DayUnit;
