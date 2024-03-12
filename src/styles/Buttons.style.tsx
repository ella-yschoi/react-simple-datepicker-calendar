import styled from 'styled-components';

const ButtonBase = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 1.475rem;
  height: 1.875rem;
  position: relative;

  &:hover {
    background-color: #313131;
    border-radius: 20%;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #6e6e6e;
    border-radius: 10px;
  }
`;

const StyledLeftButton = styled(ButtonBase)`
  margin: 0px 5px 0px 95px;
  
  &::before {
    top: 18%;
    left: 18%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(10%, 230%) rotate(-45deg);
  }

  &::after {
    top: 60%;
    left: 30%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(-19%, -50%) rotate(45deg);
  }
`;

const StyledTodayButton = styled.div`
  width: .6rem;
  height: .6rem;
  padding: 1px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #6e6e6e;
  
  &:hover {
    background-color: #c5c5c5;
    border-radius: 50%;
  }
`;

const StyledRightButton = styled(ButtonBase)`
  margin: 0px 3px 0px 5px;

  &::before {
    top: 20%;
    left: 29%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(10%, 230%) rotate(45deg);
  }

  &::after {
    top: 60%;
    left: 43%;
    width: 0.7rem;
    height: 0.125rem;
    transform: translate(-19%, -50%) rotate(-45deg);
  }
`;

export { StyledLeftButton, StyledTodayButton, StyledRightButton };
