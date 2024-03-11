import {
  StyledLeftButton,
  StyledTodayButton,
  StyledRightButton,
} from '../../styles/Buttons.style';

type ButtonProps = {
  setCurrentDate: (date: Date) => void;
  currentDate?: Date;
};

const LeftButton: React.FC<ButtonProps> = ({ setCurrentDate, currentDate }) => {
  const handlePreviousMonth = () => {
    if (currentDate) {
      // currentDate가 정의되어 있으면 해당 로직을 실행
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      );
    }
  };

  return <StyledLeftButton onClick={handlePreviousMonth} />;
};

const TodayButton: React.FC<ButtonProps> = ({ setCurrentDate }) => {
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return <StyledTodayButton onClick={handleToday} />;
};

const RightButton: React.FC<ButtonProps> = ({
  setCurrentDate,
  currentDate,
}) => {
  const handleNextMonth = () => {
    if (currentDate) {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      );
    }
  };

  return <StyledRightButton onClick={handleNextMonth} />;
};

export { LeftButton, TodayButton, RightButton };
