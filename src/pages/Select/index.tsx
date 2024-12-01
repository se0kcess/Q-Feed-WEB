import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo/Logo';
import CategorySelectContainer from '@/components/ui/CategorySelectContainer/CategorySelectContainer';
import theme from '@/styles/theme';

const SelectPage = () => {
  const navigate = useNavigate();
  const handleCategorySelect = (categoryId: string) => {
    //질문에 답했는데 확인 로직 추가
    navigate(`/question/${categoryId}`);
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo width={62} height={53} />
      </LogoWrapper>
      <Title>당신의 취향을 골라주세요!</Title>
      <CategoryContainer>
        <CategorySelectContainer onCategorySelect={handleCategorySelect} />
      </CategoryContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #FFF9F4;
  min-height: calc(100vh - 5.25rem);
  margin-bottom: 5.25rem;
  overflow: auto;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.75rem;
  margin-bottom: 2.358rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 4.875rem;
`;

const CategoryContainer = styled.div`
  width: 100%;
`;

export default SelectPage;
