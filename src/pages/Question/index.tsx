import { useState } from 'react';
import styled from '@emotion/styled';
import { IoMdLock, IoMdUnlock } from "react-icons/io";
import { ImageUpload } from '@/components/ui/ImageUpload/ImageUpload';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';

const QuestionPage = () => {
  const [answer, setAnswer] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleImageUpload = (file: File | null) => {
    setUploadedImage(file);
  };

  const handleLockToggle = () => {
    setIsPrivate((prev) => !prev);
  };

  const handleSubmit = () => {
    alert(`답변: ${answer}\n공개 여부: ${isPrivate ? '비공개' : '공개'}\n이미지: ${uploadedImage ? uploadedImage.name : '없음'}`);
  };

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <Title>오늘의 질문</Title>
          <Date>D+32</Date>
        </TitleContainer>
        <Question>맛집을 고르는 기준은 무엇인가요?</Question>
        <ImageUploadContainer>
          <ImageUpload onImageUpload={handleImageUpload} />
        </ImageUploadContainer>
        <AnswerContainer>
          <InputLabel>
            <LabelText>답변을 입력해주세요.</LabelText>
            <LockButton onClick={handleLockToggle} isPrivate={isPrivate}>
              {isPrivate ? <IoMdLock size="1rem" /> : <IoMdUnlock size="1rem" />}
            </LockButton>
          </InputLabel>
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            maxLength={100}
          />
        </AnswerContainer>
        <CharacterCount>{`${answer.length}/100`}</CharacterCount>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #FFF9F4;
  width: 100%;
  height: calc(100vh - 8.25rem);
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.125rem;
  font-family: ${theme.typography.fontFamily.korean};
  color: ${theme.colors.gray[600]};
`;

const Date = styled.p`
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily.english};
  color: ${theme.colors.gray[600]};
`;

const Question = styled.p`
  font-family: ${theme.typography.header1.fontFamily.korean};
  font-weight: bold;
  font-size: 1.25rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 1.875rem;
`;

const ImageUploadContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const AnswerContainer = styled.div`
  width: 100%;
`;

const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const LabelText = styled.span`
  font-size: 1rem;
  color: ${theme.colors.gray[300]};
`;

const LockButton = styled.button<{ isPrivate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${({ isPrivate }) => (isPrivate ? '#FF480E' : '#00796B')};
  color: ${theme.colors.black};
  border-radius: 0.875rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
`;

const Input = styled.textarea`
  width: 100%;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 0.5rem;
  padding: 0.875rem;
  font-size: 0.875rem;
  resize: none;
  outline: none;
  font-family: ${theme.typography.fontFamily.korean};

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const CharacterCount = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.gray[300]};
  margin-bottom: 1rem;
  align-self: flex-end;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #9d6f70;
  }
`;

export default QuestionPage;
