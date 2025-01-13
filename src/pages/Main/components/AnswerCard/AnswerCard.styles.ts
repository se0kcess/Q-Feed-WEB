import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 5px;
`;

export const TextTitle = styled.h1`
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: normal;
  color: ${theme.colors.gray[300]};
  text-align: center;
  width: 100%;
`;
export const TextAnswer = styled.h2`
  width: 100%;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: normal;
  color: ${theme.colors.gray[600]};
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin-top: 15px;
`;

export const DateText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 88px;
  height: auto;
  max-width: 377px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.15);
  }
`;
