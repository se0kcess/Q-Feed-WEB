import React from 'react';
import styled from '@emotion/styled';

interface HobbyTagProps {
  text: string;
  color?: string; // 태그 배경색
  textColor?: string; // 태그 글자색
}

export const HobbyTag: React.FC<HobbyTagProps> = ({ text, color = '#f5f5f5', textColor = '#333' }) => {
  return <Tag color={color} textColor={textColor}>{text}</Tag>;
};

const Tag = styled.span<{ color: string; textColor: string }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
`;
