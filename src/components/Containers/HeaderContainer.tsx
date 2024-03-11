import { StyledHeaderContainer } from '../../styles/Containers.style';

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

export default HeaderContainer;
