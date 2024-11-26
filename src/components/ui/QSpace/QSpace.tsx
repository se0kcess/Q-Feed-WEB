import React from 'react';
import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';

interface QSpaceProps {
  imageUrl: string; // 이미지 URL
  title: string; // 제목
  description: string; // 소개글
  memberCount: number; // 멤버 수
  lastUpdated: string; // 마지막 업데이트 시간
}

export const QSpace: React.FC<QSpaceProps> = ({ imageUrl, title, description, memberCount, lastUpdated }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <MetaInfo>
          <Members>
            <FaUser size="1rem" />
            <MemberCount>{memberCount}</MemberCount>
          </Members>
          <UpdatedTime>{lastUpdated}</UpdatedTime>
        </MetaInfo>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  flex: 0 0 100px;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #555;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #777;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MemberCount = styled.span`
  font-size: 0.875rem;
`;

const UpdatedTime = styled.span``;
