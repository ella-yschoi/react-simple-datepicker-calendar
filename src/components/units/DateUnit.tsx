import { StyledCurrentDateUnit, StyledPrevNextDateUnit } from '../../styles/Units.style';

interface DateUnitProps {
  className?: string;
  onClick: () => void;
  date: number;
  $currentDateFontColor?: string;
  $prevNextDateFontColor?: string;
}

const CurrentDateUnit: React.FC<DateUnitProps> = ({ className, onClick, date, $currentDateFontColor }) => (
  <StyledCurrentDateUnit className={className} onClick={onClick} $currentDateFontColor={$currentDateFontColor}>
    {date}
  </StyledCurrentDateUnit>
);

const PrevNextDateUnit: React.FC<DateUnitProps> = ({ className, onClick, date, $prevNextDateFontColor }) => (
  <StyledPrevNextDateUnit className={className} onClick={onClick} $prevNextDateFontColor={$prevNextDateFontColor}>
    {date}
  </StyledPrevNextDateUnit>
);


export { CurrentDateUnit, PrevNextDateUnit };
