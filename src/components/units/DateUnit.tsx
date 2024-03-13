import { StyledDateUnit, StyledExtraDateUnit } from '../../styles/Units.style';

interface DateUnitProps {
  className?: string;
  onClick: () => void;
  date: number;
  $currentDateFontColor?: string;
  $prevNextDateFontColor?: string;
}

const DateUnit: React.FC<DateUnitProps> = ({ className, onClick, date, $currentDateFontColor }) => (
  <StyledDateUnit className={className} onClick={onClick} $currentDateFontColor={$currentDateFontColor}>
    {date}
  </StyledDateUnit>
);

const ExtraDateUnit: React.FC<DateUnitProps> = ({ className, onClick, date, $prevNextDateFontColor }) => (
  <StyledExtraDateUnit className={className} onClick={onClick} $prevNextDateFontColor={$prevNextDateFontColor}>
    {date}
  </StyledExtraDateUnit>
);


export { DateUnit, ExtraDateUnit };
