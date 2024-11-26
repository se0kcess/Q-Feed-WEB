/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import ProfileImageCon from "../../components/ui/ProfileImageCon/ProfileImageCon"; // 프로필 이미지 컴포넌트
import InputBar from "../../components/ui/InputBar/InputBar";

interface ChatItemProps {
  profileImg?: string; // 프로필 이미지 URL
  userName: string; // 사용자 이름
  lastMessage: string; // 마지막 메시지
  time: string; // 메시지 시간
  unreadCount?: number; // 읽지 않은 메시지 수
}

// 채팅 리스트 아이템 컴포넌트
const ChatItem: React.FC<ChatItemProps> = ({
  profileImg,
  userName,
  lastMessage,
  time,
  unreadCount,
}) => {
  return (
    <div css={chatItemStyle}>
      <ProfileImageCon src={profileImg || ""} size={40} />
      <div css={chatContentStyle}>
        <div css={userNameStyle}>
          <span>{userName}</span>
          <span css={timeStyle}>{time}</span>
        </div>
        <div css={lastMessageStyle}>
          <span>{lastMessage}</span>
          {unreadCount && unreadCount > 0 && (
            <span css={unreadCountStyle}>{unreadCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

// 채팅 리스트 메인 컴포넌트
const ChatList: React.FC = () => {
  const chatData = [
    {
      profileImg: "",
      userName: "백종원",
      lastMessage: "마지막 대화 내용 어쩌구저쩌구",
      time: "13:18",
      unreadCount: 3,
    },
    {
      profileImg: "",
      userName: "백종원",
      lastMessage: "마지막 대화 내용 어쩌구저쩌구",
      time: "13:18",
      unreadCount: 10,
    },
    {
      profileImg: "",
      userName: "백종원",
      lastMessage: "마지막 대화 내용 어쩌구저쩌구",
      time: "13:18",
    },
  ];

  return (
    <div css={chatListContainerStyle}>
      {/* 검색 인풋 */}
      <InputBar placeholder="검색어를 입력하세요" />
      {/* 채팅 리스트 */}
      <div css={chatListStyle}>
        {chatData.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;

// 스타일 정의
const chatListContainerStyle = css`
  padding: 0;
`;

const chatListStyle = css`
  margin-top: 10px;
  background-color: #f3ebe0;
`;

const chatItemStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const chatContentStyle = css`
  flex: 1;
  margin-left: 10px;
`;

const userNameStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
`;

const timeStyle = css`
  color: #999;
  font-size: 12px;
`;

const lastMessageStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const unreadCountStyle = css`
  background-color: #ff4d4f;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 5px;
`;
