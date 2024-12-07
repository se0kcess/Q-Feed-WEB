import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import ProfileImage from '@/components/ui/ProfileImageCon/ProfileImageCon';
import SelectableHobbyTags from '@/components/ui/HobbyTag/SelectableHobbyTags';
import Header from '@/pages/MyPage/components/Header/Header';
import { dummyProfile } from '@/mocks/dunmyMyProfile';
import {
  Container,
  ProfileSection,
  ProfileImageWrapper,
  EditButton,
  Name,
  Form,
  FormGroup,
  Label,
  Input,
  TextAreaWrapper,
  TextArea,
  CharacterCount,
  SubmitButton,
} from '@/pages/ProfileEdit/styles';

const ProfileEditPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(dummyProfile.name);
  const [bio, setBio] = useState(dummyProfile.bio);
  const [hobbyTags, setHobbyTags] = useState<string[]>(dummyProfile.tags);
  const availableTags = ['여행', '스포츠', '패션', '문화', '맛집', '기타'];

  const handleTagSelectionChange = (selectedTags: string[]) => {
    setHobbyTags(selectedTags);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/mypage');
  };

  return (
    <>
      <Header title='프로필 수정' />
      <Container>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImage
              src="https://via.placeholder.com/100"
              size={120}
              alt="프로필 이미지"
            />
            <EditButton onClick={() => alert('프로필 이미지 변경')}>
              <AiFillEdit size={18} />
            </EditButton>
          </ProfileImageWrapper>
          <Name>{name}</Name>
        </ProfileSection>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요."
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bio">한 줄 소개</Label>
            <TextAreaWrapper>
              <TextArea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="한 줄로 자신을 소개해보세요."
                maxLength={100}
              />
              <CharacterCount>{`${bio.length}/100`}</CharacterCount>
            </TextAreaWrapper>
          </FormGroup>
          <FormGroup>
            <Label>취미 태그</Label>
            <SelectableHobbyTags
              tags={availableTags}
              selectedTags={hobbyTags}
              onSelectionChange={handleTagSelectionChange}
            />
          </FormGroup>
          <SubmitButton type="submit">수정하기</SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default ProfileEditPage;
