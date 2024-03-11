import { StyledDateUnit, StyledExtraDateUnit } from '../../styles/Units.style';

interface DateUnitProps {
  className?: string;
  onClick: () => void;
  date: number;
}

const DateUnit: React.FC<DateUnitProps> = ({ className, onClick, date }) => (
  <StyledDateUnit className={className} onClick={onClick}>
    {date}
  </StyledDateUnit>
);

const ExtraDateUnit: React.FC<DateUnitProps> = ({
  className,
  onClick,
  date,
}) => (
  <StyledExtraDateUnit className={className} onClick={onClick}>
    {date}
  </StyledExtraDateUnit>
);

export { DateUnit, ExtraDateUnit };
