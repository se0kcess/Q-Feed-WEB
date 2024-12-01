import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Header from '@/pages/MyPage/components/Header';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import Button from '@/pages/Profile/components/Button';
import PopularPostSlider from '@/pages/Main/components/PopularPostSlider/PopularPostSlider';
import Tags from '@/pages/MyPage/components/Tags';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaShare } from "react-icons/fa6";

// 더미 데이터
const dummyProfile = {
  name: '정주연',
  id: 'Chung Juyeon',
  followers: 185,
  following: 72,
  bio: '안녕하세요, 여러분! 현재 푸드 칼럼리스트로 활동하고 있는 작가, 정주연입니다. 만나서 반가워요 꾸준히 소통해요 :)',
  profileImage: 'https://via.placeholder.com/200',
  tags: ['여행', '패션', '맛집'],
  answers: [
    { post: '나는 국내 여행으로도 만족이야', src: null },
    {
      post: '따끈한 일본 온천으로 놀러가고싶어',
      src: 'https://cdn.traveltimes.co.kr/news/photo/202411/410169_35552_1437.jpg',
    },
    {
      post: '여행은 무슨 집이 최고야야',
      src: 'https://i.namu.wiki/i/_VR5WHEDuh8GTDefHS5Q9hRraEwIEwHVMMFNwzr3uDAgXeQ-2ht67CM8tj4KtttckiCj7-VOdzeOQnpSz7ks8w.webp',
    },
    {
      post: '태국 망고 먹고싶어',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSHVl8viXH3OPR1UyFBqVdeF80pdytyDieQ&s',
    },
    {
      post: '대만가서 딤섬 먹고싶다',
      src: 'https://i.namu.wiki/i/VJ3wVc3XFU2ksCFrU3TFUeG4vpB6SG0MivSNHN3jRM2SuAaM5MD018FNBV3QKQj9mKsvzL3Dnu17M0g_z35Wdg.webp',
    },
    {
      post: '라스베가스에 가서 잭팟을 노리겠어',
      src: 'https://static.hanatour.com/product/2019/02/01/0055e0rtfv/default.jpg',
    },
  ],
};

const ProfilePage = () => {
  const { name, id, followers, following, bio, profileImage, answers, tags } = dummyProfile;

  return (
    <>
      <Header title="프로필" />
      <Container>
        <ProfileSection>
          <NameSection>
            <Name>{name}</Name>
            <Id>({id})</Id>
          </NameSection>
          <ProfileImageWrapper>
            <ProfileImage
              src={profileImage}
              size={200}
              alt={`${name}의 프로필 이미지`}
            />
          </ProfileImageWrapper>
          <Tags tags={tags} />
          <FollowInfo>
            <InfoItem>
              {following} following
            </InfoItem>
            <InfoItem>
              {followers} followers
            </InfoItem>
          </FollowInfo>
          <ButtonGroup>
            <Button
              onClick={() => alert('클릭!')}
              backgroundColor={theme.colors.primary}
              textColor={theme.colors.white}
            >
              Follow
            </Button>
            <Button
              onClick={() => alert('클릭!')}
              backgroundColor={theme.colors.white}
              textColor={theme.colors.primary}
            >
              <IoChatbubbleEllipsesOutline /></Button>
            <Button
              onClick={() => alert('클릭!')}
              backgroundColor={theme.colors.sub}
              textColor={theme.colors.primary}
            >
              <FaShare /></Button>
          </ButtonGroup>
        </ProfileSection>
        <BioSection>
          <BioLabel>한 줄 소개</BioLabel>
          <BioText>{bio}</BioText>
        </BioSection>
        <AnswerSection>
          <TitleSection>
            <Title>나의 답변</Title>
            <AnswerCounter>({answers.length})</AnswerCounter>
          </TitleSection>
          <PopularPostSlider popularPosts={answers} />
        </AnswerSection>
      </Container>
    </>
  );
};

export default ProfilePage;

const Container = styled.div`
  padding: 2.5rem 1rem;
  background-color: ${theme.colors.background};
  min-height: calc(100vh - 3rem);
  margin-bottom: 5.25rem;
  overflow: hidden;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.625rem;
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

const NameSection = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.korean};
`;

const Id = styled.span`
  font-size: 1rem;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.english};
`;

const FollowInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const InfoItem = styled.div`
 font-family: ${theme.typography.fontFamily.english};
  font-size: 1rem;
  gap: 0.5rem;
  color: ${theme.colors.gray[300]};
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;


const BioSection = styled.div`
  margin-bottom: 2.625rem;
`;

const BioLabel = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.header1.fontFamily};
`;

const BioText = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: ${theme.colors.gray[600]};
  font-family: ${theme.typography.fontFamily.korean};
`;

const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${theme.typography.header1.fontFamily};
  color: ${theme.colors.primary};
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const AnswerCounter = styled.span`
  font-family: ${theme.typography.fontFamily.english};
  color: ${theme.colors.gray[400]};
  font-size: 0.75rem;
  text-align: left;
  margin-left: 0.3rem;
`;

