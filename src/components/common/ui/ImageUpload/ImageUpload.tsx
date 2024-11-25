import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCloudUploadAlt, FaTrashAlt } from 'react-icons/fa';

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  // 파일 처리
  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageUpload?.(file);
  };

  // 파일 입력 이벤트 핸들러
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  // 드래그 앤 드롭 이벤트 핸들러
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 이미지 삭제
  const handleRemoveImage = () => {
    setPreview(null);
  };

  return (
    <Container>
      <UploadBox onDrop={handleDrop} onDragOver={handleDragOver}>
        {preview ? (
          <PreviewContainer>
            <PreviewImage src={preview} alt="Uploaded Preview" />
            <RemoveButton onClick={handleRemoveImage}>
              <FaTrashAlt size="1.5rem" />
            </RemoveButton>
          </PreviewContainer>
        ) : (
          <Placeholder>
            <FaCloudUploadAlt size="3rem" color="#aaa" />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Placeholder>
        )}
      </UploadBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  height: 18.75rem;
  border: 0.125rem dashed #ccc;
  border-radius: 0.625rem;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #76c7e0;
  }
`;

const Placeholder = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    margin-bottom: 0.5rem;
  }
`;

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.625rem;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }

  svg {
    color: #f44336;
  }
`;
