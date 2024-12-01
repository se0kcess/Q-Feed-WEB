/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import ProfileImageCon from '@/components/ui/ProfileImageCon/ProfileImageCon';

const FollowerFollowingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('follower'); // "follower" or "following"
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([
    { id: 1, name: '백종원', isFollowing: true },
    { id: 2, name: '백종원', isFollowing: false },
    { id: 3, name: '백종원', isFollowing: false },
    { id: 4, name: '백종원', isFollowing: true },
  ]);

  const [following, setFollowing] = useState([
    { id: 1, name: '백종원', isFollowing: true },
    { id: 2, name: '백종원', isFollowing: true },
    { id: 3, name: '백종원', isFollowing: true },
    { id: 4, name: '백종원', isFollowing: true },
  ]);

  const handleFollowerToggle = (id: number) => {
    setFollowers((prev) =>
      prev.map((follower) =>
        follower.id === id ? { ...follower, isFollowing: !follower.isFollowing } : follower
      )
    );
  };
  const handleFollowingToggle = (id: number) => {
    setFollowing((prev) =>
      prev.map((follow) =>
        follow.id === id ? { ...follow, isFollowing: !follow.isFollowing } : follow
      )
    );
  };

  return (
    <div css={containerStyle}>
      {/* Header */}
      <div css={headerStyle}>
        <IoChevronBack css={backIconStyle} onClick={() => navigate(-1)} />
      </div>

      {/* Tabs */}
      <div css={tabContainerStyle}>
        <button
          css={[tabStyle, activeTab === 'follower' && activeTabStyle]}
          onClick={() => setActiveTab('follower')}
        >
          팔로워
        </button>
        <button
          css={[tabStyle, activeTab === 'following' && activeTabStyle]}
          onClick={() => setActiveTab('following')}
        >
          팔로잉
        </button>
      </div>

      {/* List */}
      <div css={listContainerStyle}>
        {activeTab === 'follower' &&
          followers.map((follower) => (
            <div key={follower.id} css={listItemStyle}>
              <ProfileImageCon src="" size={40} />
              <span css={nameStyle}>{follower.name}</span>
              {follower.isFollowing ? (
                <div css={buttonGroupStyle}>
                  <button css={ButtonStyle}>메시지</button>
                  <button css={ButtonStyle} onClick={() => handleFollowerToggle(follower.id)}>
                    팔로우 취소
                  </button>
                </div>
              ) : (
                <button css={ButtonStyle} onClick={() => handleFollowerToggle(follower.id)}>
                  맞팔로우
                </button>
              )}
            </div>
          ))}

        {activeTab === 'following' &&
          following.map((follow) => (
            <div key={follow.id} css={listItemStyle}>
              <ProfileImageCon src="" size={40} />
              <span css={nameStyle}>{follow.name}</span>
              {follow.isFollowing ? (
                <div css={buttonGroupStyle}>
                  <button css={ButtonStyle}>메시지</button>
                  <button css={ButtonStyle} onClick={() => handleFollowingToggle(follow.id)}>
                    팔로우 취소
                  </button>
                </div>
              ) : (
                <button css={ButtonStyle} onClick={() => handleFollowingToggle(follow.id)}>
                  맞팔로우
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FollowerFollowingPage;

// 스타일 정의
const containerStyle = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f4ef;
`;

const headerStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 8px;
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
`;

const backIconStyle = css`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
`;

const tabContainerStyle = css`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const tabStyle = css`
  flex: 1;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background-color: #f9f4ef;
  border: none;
  border-bottom: 2px solid transparent;
`;

const activeTabStyle = css`
  font-weight: bold;
  border-bottom: 2px solid #b9a298;
`;

const listContainerStyle = css`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const listItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const nameStyle = css`
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

const buttonGroupStyle = css`
  display: flex;
  gap: 8px;
`;

const ButtonStyle = css`
  background-color: #ffffff;
  color: #9d6f70;
  border: none;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
`;
