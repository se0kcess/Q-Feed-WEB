import { useNavigate } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import {
  Container,
  Content,
  Description,
  Divider,
  Footer,
  Image,
  ImageContainer,
  LastUpdated,
  MemberCount,
  Members,
  RecruitingStatus,
  TextContainer,
  Title,
} from '@/components/ui/QSpaceCard/QSpaceCard.styles';
import { ROUTES } from '@/constants/routes';

interface QSpaceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  memberCount: number;
  isRecruiting: boolean;
  lastUpdated: string;
  groupId: number;
}

const QSpaceCard = ({
  imageUrl,
  title,
  description,
  memberCount,
  isRecruiting,
  lastUpdated,
  groupId,
}: QSpaceCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.QSPACE_DETAIL, {
      state: { groupId },
    });
  };

  return (
    <Container onClick={handleClick}>
      <Content>
        <ImageContainer>
          <Image src={imageUrl} alt={title} />
        </ImageContainer>
        <TextContainer>
          <RecruitingStatus isRecruiting={isRecruiting}>
            {isRecruiting ? '모집중' : '모집 완료'}
          </RecruitingStatus>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </Content>
      <Divider />
      <Footer>
        <Members>
          <CiUser size="1rem" />
          <MemberCount>{memberCount}</MemberCount>
        </Members>
        <LastUpdated>{lastUpdated}</LastUpdated>
      </Footer>
    </Container>
  );
};

export default QSpaceCard;
