import styled from '@emotion/styled';
import theme from '@/styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  backgroundColor = theme.colors.white,
  textColor = theme.colors.gray[400],
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ backgroundColor: string; textColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border: none;
  border-radius: 1.875rem;
  font-family: ${theme.typography.fontFamily.english};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
  }
`;

export default Button;
