import { useState } from 'react';
import styled from '@emotion/styled';
import Header from '@/pages/MyPage/components/Header';
import { QSpaceCard } from '@/components/ui/QSpaceCard/QSpaceCard';
import QuestionCard from '@/pages/MyPage/components/QuestionCard';
import theme from '@/styles/theme';
import Button from '@/pages/MyPage/components/Button';
import MyProfile from '@/pages/MyPage/components/MyProfile';

// 더미 데이터
const dummyProfile = {
  name: '정주연',
  id: 'juyeon123',
  followers: 16,
  following: 23,
  bio: '숨은 맛집을 찾아다니는 주연씨입니다!',
  profileImage: 'https://via.placeholder.com/100',
  tags: ['여행', '패션', '맛집'],
};

const dummyQuestions = [
  { id: 1, date: '2024.11.15', content: '맛집을 고르는 기준은 무엇인가요?', isPrivate: true },
  { id: 2, date: '2024.11.15', content: '가장 좋아하는 운동은 무엇인가요?', isPrivate: false },
  { id: 3, date: '2024.11.15', content: '가장 기억에 남는 여행지는?', isPrivate: true },
];

const dummyQSpaces = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '제주도 맛집 토론방',
    description: '제주의 숨은 맛집 이야기해요!',
    memberCount: 133,
    isRecruiting: true,
    lastUpdated: '방금 전 게시',
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: '서울 카페 탐방',
    description: '서울의 멋진 카페를 공유해요!',
    memberCount: 87,
    isRecruiting: false,
    lastUpdated: '3일 전 게시',
  },
];

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<'myQuestions' | 'qSpace'>('myQuestions');
  const [myQuestions, setMyQuestions] = useState(dummyQuestions);
  const profile = dummyProfile;
  const qSpaceList = dummyQSpaces;

  // 잠금 버튼 토글 핸들러
  const handleLockToggle = (id: number) => {
    setMyQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, isPrivate: !question.isPrivate } : question
      )
    );
  };

  return (
    <>
      <Header title='마이페이지' />
      <Container>
        <MyProfile profile={profile} />
        <ButtonGroup>
          <Button onClick={() => alert('프로필 수정 클릭')}>프로필 수정</Button>
          <Button onClick={() => alert('프로필 공유 클릭')}>
            프로필 공유
          </Button>
        </ButtonGroup>
        <TabContainer>
          <Tab onClick={() => setActiveTab('myQuestions')} isActive={activeTab === 'myQuestions'}>
            나의 답변
          </Tab>
          <Tab onClick={() => setActiveTab('qSpace')} isActive={activeTab === 'qSpace'}>
            참여중인 소통방
          </Tab>
        </TabContainer>
        <Content>
          {activeTab === 'myQuestions' && (
            <QuestionList>
              {myQuestions.map((question) => (
                <QuestionCard
                  key={question.id}
                  date={question.date}
                  content={question.content}
                  isPrivate={question.isPrivate}
                  onLockToggle={() => handleLockToggle(question.id)}
                  onClick={() => alert(`답변 상세 페이지 이동 id(${question.id})`)}
                />
              ))}
            </QuestionList>
          )}
          {activeTab === 'qSpace' && (
            <QSpaceList>
              {qSpaceList.map((space, index) => (
                <QSpaceCard key={index} {...space} />
              ))}
            </QSpaceList>
          )}
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 8rem);
  margin-bottom: 5.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.75rem;
  font-size: 1.125rem;
  font-weight: bold;
  background: none;
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? `2px solid ${theme.colors.primary}` : 'none')};
  color: ${({ isActive }) => (isActive ? theme.colors.primary : theme.colors.gray[300])};
  font-family: ${theme.typography.fontFamily.korean};
  cursor: pointer;

  &:hover {
    color: #b07d87;
  }
`;

const Content = styled.div`
  padding: 1rem 0;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QSpaceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default MyPage;