import styled from 'styled-components';

const ButtonBase = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  width: 1.475rem;
  height: 1.875rem;
  position: relative;
  transition: all 0.2s ease;

  /* Focus styles for keyboard navigation */
  &:focus {
    outline: 2px solid #2383e2;
    outline-offset: 2px;
    border-radius: 4px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:hover {
    background-color: #313131;
    border-radius: 20%;
  }

  /* 모바일에서만 터치 타겟 보장 */
  @media (max-width: 768px) {
    min-width: 44px;
    min-height: 44px;
  }

  /* 데스크탑에서는 min-width/min-height 적용하지 않음 */

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    &:hover {
      background-color: #2383e2;
      border: 2px solid #2383e2;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
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
  width: 0.6rem;
  height: 0.6rem;
  padding: 1px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #6e6e6e;
  transition: all 0.2s ease;

  /* Focus styles for keyboard navigation */
  &:focus {
    outline: 2px solid #2383e2;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:hover {
    background-color: #c5c5c5;
    border-radius: 50%;
  }

  /* 모바일에서만 터치 타겟 보장 */
  @media (max-width: 768px) {
    min-width: 44px;
    min-height: 44px;
  }

  /* 데스크탑에서는 min-width/min-height 적용하지 않음 */

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;

    &:hover {
      background-color: #2383e2;
      border-color: #2383e2;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
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
