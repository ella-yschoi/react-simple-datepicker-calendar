import styled from 'styled-components';

const StyledDayUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  width: 15px;
  height: 10px;
  font-size: 14px;
  color: #899797;
`;

const StyledDateUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  font-size: 14px;
  color: #d5d5d5;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: #273241;
    border: 1px solid #2383e2;
    border-radius: 20%;
  }

  &.today {
    color: #eff5fd;
    background-color: #eb5756;
    border-radius: 50%;
    font-weight: 600;
  }

  &.selected {
    color: #eff5fd;
    background-color: #2383e2;
    border-radius: 20%;
  }
`;

const StyledExtraDateUnit = styled(StyledDateUnit)`
  color: #899797;
`;

export { StyledDayUnit, StyledDateUnit, StyledExtraDateUnit };
