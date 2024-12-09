// ImageUpload.tsx
import { useState } from 'react';
import { LuImagePlus, LuImageOff } from 'react-icons/lu';
import theme from '@/styles/theme';
import {
  Container,
  ErrorMessage,
  Placeholder,
  PreviewContainer,
  PreviewImage,
  RemoveOverlay,
  UploadBox,
} from './ImageUpload.styles';
import { AllowedImageType, FILE_LIMITS } from '@/constants/fileLimits';

interface ImageUploadProps {
  onImageUpload?: (file: File | null) => void;
  accept?: string;
  maxSize?: number;
}

export const ImageUpload = ({
  onImageUpload,
  accept = 'image/*',
  maxSize = FILE_LIMITS.IMAGE.MAX_SIZE,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    if (!FILE_LIMITS.IMAGE.ALLOWED_TYPES.includes(file.type as AllowedImageType)) {
      setError(FILE_LIMITS.IMAGE.ERROR_MESSAGES.INVALID_TYPE);
      return;
    }

    if (file.size > maxSize) {
      setError(FILE_LIMITS.IMAGE.ERROR_MESSAGES.SIZE_EXCEEDED);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
    onImageUpload?.(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleBoxClick = () => {
    if (preview) {
      setPreview(null);
      setError(null);
      onImageUpload?.(null);
    }
  };

  return (
    <Container>
      <UploadBox
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBoxClick}
        hasPreview={!!preview}
      >
        <input type="file" accept={accept} onChange={handleFileChange} />
        {preview ? (
          <PreviewContainer>
            <PreviewImage src={preview} alt="Uploaded Preview" />
            <RemoveOverlay>
              <LuImageOff size="3rem" color={theme.colors.primary} />
            </RemoveOverlay>
          </PreviewContainer>
        ) : (
          <Placeholder>
            <LuImagePlus size="3rem" color={theme.colors.primary} />
          </Placeholder>
        )}
      </UploadBox>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default ImageUpload;
