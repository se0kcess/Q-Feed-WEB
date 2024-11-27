/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileImageCon from "../../components/ui/ProfileImageCon/ProfileImageCon";
import InputBar from "../../components/ui/InputBar/InputBar";
import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineBellSlash } from "react-icons/hi2";
import { IoChevronBack } from "react-icons/io5";

const ChatRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "백종원",
      text: "제주도 국밥 존맛",
      time: "13:16",
      isMine: false,
    },
    {
      id: 2,
      sender: "나",
      text: "함덕 해장국이 ㄹㅇ 펜",
      time: "13:18",
      isMine: true,
    },
    {
      id: 3,
      sender: "백종원",
      text: "삼일시장 최고",
      time: "13:21",
      isMine: false,
    },
    {
      id: 4,
      sender: "나",
      text: "별 하나에 추억과 별 하나에 사랑과 별",
      time: "13:25",
      isMine: true,
    },
  ]);

  const handleSendMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "나",
        text: message,
        time: "13:30",
        isMine: true,
      },
    ]);
  };
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const toggleNotification = () => {
    setIsNotificationEnabled((prevState) => !prevState); // 상태를 반대로 토글
  };

  return (
    <div css={chatRoomContainer}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack />
        <span css={headerTitle}>{id} 백종원</span>
        <button css={iconButtonStyle} onClick={toggleNotification}>
          {isNotificationEnabled ? (
            <HiOutlineBell css={iconStyle} />
          ) : (
            <HiOutlineBellSlash css={iconStyle} />
          )}
        </button>
      </div>

      {/* Message List */}
      <div css={messageListStyle}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            css={msg.isMine ? myMessageStyle : otherMessageStyle}
          >
            {!msg.isMine && <ProfileImageCon src="" size={30} />}
            <div css={messageContentStyle}>
              <p>{msg.text}</p>
              <span css={timeStyle}>{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div css={inputBarContainerStyle}>
        <InputBar
          placeholder="메시지를 입력하세요."
          onSearch={handleSendMessage} // 메시지 보내기
        />
      </div>
    </div>
  );
};

export default ChatRoom;

// 스타일 정의
const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

const iconStyle = css`
  font-size: 24px;
`;
const chatRoomContainer = css`
  display: flex;
  flex-direction: column;
  height: 773px;
  background-color: #f9f4ef;
`;

const headerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

const headerTitle = css`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const messageListStyle = css`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f3ebe0;
`;

const otherMessageStyle = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const myMessageStyle = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const messageContentStyle = css`
  max-width: 70%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const timeStyle = css`
  display: block;
  margin-top: 5px;
  font-size: 12px;
  color: #999999;
  text-align: right;
`;

const inputBarContainerStyle = css`
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
`;
