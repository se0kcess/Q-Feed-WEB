// import { Comment } from '@/pages/Main/type/comment';

// export const dummyCommentList: Comment[] = [
//   {
//     id: '1',
//     author: { name: '여행러버', profileImage: 'https://i.pravatar.cc/150?img=1' },
//     content: '저는 독일 뮌헨 옥토버페스트 가보고 싶어요! 맥주 축제라니 너무 끌리네요 🍺',
//     createdAt: '2024-11-28T10:00:00',
//     likes: 15,
//     isLiked: false,
//     replyCount: 4,
//     replies: [
//       {
//         id: '1-1',
//         author: { name: '맥주매니아', profileImage: 'https://i.pravatar.cc/150?img=31' },
//         content:
//           '저도 작년에 갔다왔는데 정말 최고였어요! 1리터짜리 맥주잔으로 마시는 건 특별한 경험이에요 😊',
//         createdAt: '2024-11-28T10:05:00',
//         likes: 5,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '1',
//       },
//       {
//         id: '1-2',
//         author: { name: '독일여행고수', profileImage: 'https://i.pravatar.cc/150?img=32' },
//         content: '9월 말이 축제 피크예요! 전통의상 입고 가면 더 재미있답니다 🎊',
//         createdAt: '2024-11-28T10:10:00',
//         likes: 8,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '1',
//       },
//       {
//         id: '1-3',
//         author: { name: '맥주홀릭', profileImage: 'https://i.pravatar.cc/150?img=33' },
//         content: '현지 맥주와 소시지 조합이 환상적이에요. 특히 바이스부어스트 추천드려요! 🌭',
//         createdAt: '2024-11-28T10:15:00',
//         likes: 6,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '1',
//       },
//       {
//         id: '1-4',
//         author: { name: '축제탐험가', profileImage: 'https://i.pravatar.cc/150?img=34' },
//         content: '숙소는 미리미리 예약하셔야 해요! 축제 기간엔 뮌헨 물가가 2배는 뛰거든요 😅',
//         createdAt: '2024-11-28T10:20:00',
//         likes: 7,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '1',
//       },
//     ],
//   },
//   {
//     id: '2',
//     author: { name: '세계일주', profileImage: 'https://i.pravatar.cc/150?img=2' },
//     content: '크리스마스 마켓 좋죠! 뉘른베르크 크리스마스 마켓도 추천합니다~',
//     createdAt: '2024-11-28T09:30:00',
//     likes: 8,
//     isLiked: true,
//     replyCount: 3,
//     replies: [
//       {
//         id: '2-1',
//         author: { name: '겨울여행자', profileImage: 'https://i.pravatar.cc/150?img=32' },
//         content: '분위기가 정말 예쁘더라구요!',
//         createdAt: '2024-11-28T09:35:00',
//         likes: 3,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '2',
//       },
//       {
//         id: '2-2',
//         author: { name: '겨울여행자', profileImage: 'https://i.pravatar.cc/150?img=32' },
//         content: '분위기가 정말 예쁘더라구요!',
//         createdAt: '2024-11-28T09:35:00',
//         likes: 3,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '2',
//       },
//       {
//         id: '2-3',
//         author: { name: '겨울여행자', profileImage: 'https://i.pravatar.cc/150?img=32' },
//         content: '분위기가 정말 예쁘더라구요!',
//         createdAt: '2024-11-28T09:35:00',
//         likes: 3,
//         isLiked: false,
//         replyCount: 0,
//         parentId: '2',
//       },
//     ],
//   },
//   {
//     id: '3',
//     author: { name: '미식가', profileImage: 'https://i.pravatar.cc/150?img=3' },
//     content: '파리의 미슐랭 레스토랑 투어를 해보고 싶어요 🍽️',
//     createdAt: '2024-11-28T09:00:00',
//     likes: 25,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '4',
//     author: { name: '포토그래퍼', profileImage: 'https://i.pravatar.cc/150?img=4' },
//     content: '아이슬란드에서 오로라 촬영하고 싶어요 📸',
//     createdAt: '2024-11-28T08:45:00',
//     likes: 42,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '5',
//     author: { name: '백패커', profileImage: 'https://i.pravatar.cc/150?img=5' },
//     content: '남미 배낭여행 6개월 계획 중입니다 🎒',
//     createdAt: '2024-11-28T08:30:00',
//     likes: 31,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '6',
//     author: { name: '문화탐험가', profileImage: 'https://i.pravatar.cc/150?img=6' },
//     content: '인도 영화 촬영지 순례를 가보고 싶어요 🎬',
//     createdAt: '2024-11-28T08:15:00',
//     likes: 18,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '7',
//     author: { name: '산악인', profileImage: 'https://i.pravatar.cc/150?img=7' },
//     content: '네팔 에베레스트 베이스캠프 트레킹이 목표입니다 🏔️',
//     createdAt: '2024-11-28T08:00:00',
//     likes: 56,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '8',
//     author: { name: '해변러버', profileImage: 'https://i.pravatar.cc/150?img=8' },
//     content: '몰디브 수상방갈로에서 일주일 묵고 싶어요 🏖️',
//     createdAt: '2024-11-28T07:45:00',
//     likes: 44,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '9',
//     author: { name: '미술애호가', profileImage: 'https://i.pravatar.cc/150?img=9' },
//     content: '피렌체 우피치 미술관 투어를 꼭 해보고 싶어요 🎨',
//     createdAt: '2024-11-28T07:30:00',
//     likes: 29,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '10',
//     author: { name: '음악여행자', profileImage: 'https://i.pravatar.cc/150?img=10' },
//     content: '빈 필하모닉 신년음악회를 직접 보고 싶어요 🎻',
//     createdAt: '2024-11-28T07:15:00',
//     likes: 37,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '11',
//     author: { name: '역사탐험가', profileImage: 'https://i.pravatar.cc/150?img=11' },
//     content: '페트라 유적지를 탐험하고 싶어요 🏛️',
//     createdAt: '2024-11-28T07:00:00',
//     likes: 33,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '12',
//     author: { name: '와인러버', profileImage: 'https://i.pravatar.cc/150?img=12' },
//     content: '이탈리아 토스카나 와이너리 투어를 가보고 싶어요 🍷',
//     createdAt: '2024-11-28T06:45:00',
//     likes: 28,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '13',
//     author: { name: '축제매니아', profileImage: 'https://i.pravatar.cc/150?img=13' },
//     content: '스페인 토마토 축제 라 토마티나 참가하고 싶어요 🍅',
//     createdAt: '2024-11-28T06:30:00',
//     likes: 41,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '14',
//     author: { name: '자연탐험가', profileImage: 'https://i.pravatar.cc/150?img=14' },
//     content: '옐로스톤 국립공원의 자연을 보고 싶어요 🌋',
//     createdAt: '2024-11-28T06:15:00',
//     likes: 39,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '15',
//     author: { name: '도시여행자', profileImage: 'https://i.pravatar.cc/150?img=15' },
//     content: '도쿄 시부야 스크램블 교차로에서 인생샷 찍고 싶어요 📸',
//     createdAt: '2024-11-28T06:00:00',
//     likes: 27,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '16',
//     author: { name: '서핑러버', profileImage: 'https://i.pravatar.cc/150?img=16' },
//     content: '호주 골드코스트에서 서핑 배우고 싶어요 🏄‍♂️',
//     createdAt: '2024-11-28T05:45:00',
//     likes: 34,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '17',
//     author: { name: '스포츠팬', profileImage: 'https://i.pravatar.cc/150?img=17' },
//     content: '윔블던 테니스 결승전을 직관하고 싶어요 🎾',
//     createdAt: '2024-11-28T05:30:00',
//     likes: 23,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '18',
//     author: { name: '쇼핑러버', profileImage: 'https://i.pravatar.cc/150?img=18' },
//     content: '두바이 몰에서 쇼핑하고 싶어요 🛍️',
//     createdAt: '2024-11-28T05:15:00',
//     likes: 31,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '19',
//     author: { name: '힐링러버', profileImage: 'https://i.pravatar.cc/150?img=19' },
//     content: '스위스 알프스에서 힐링하고 싶어요 ⛰️',
//     createdAt: '2024-11-28T05:00:00',
//     likes: 45,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '20',
//     author: { name: '카페투어러', profileImage: 'https://i.pravatar.cc/150?img=20' },
//     content: '베트남 호이안의 카페들을 돌아보고 싶어요 ☕',
//     createdAt: '2024-11-28T04:45:00',
//     likes: 26,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '21',
//     author: { name: '캠핑러버', profileImage: 'https://i.pravatar.cc/150?img=21' },
//     content: '캐나다 로키산맥에서 캠핑하고 싶어요 ⛺',
//     createdAt: '2024-11-28T04:30:00',
//     likes: 38,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '22',
//     author: { name: '동물러버', profileImage: 'https://i.pravatar.cc/150?img=22' },
//     content: '코스타리카의 열대우림에서 동물들을 관찰하고 싶어요 🦥',
//     createdAt: '2024-11-28T04:15:00',
//     likes: 42,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '23',
//     author: { name: '온천러버', profileImage: 'https://i.pravatar.cc/150?img=23' },
//     content: '아이슬란드 블루라군에서 온천욕하고 싶어요 ♨️',
//     createdAt: '2024-11-28T04:00:00',
//     likes: 36,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '24',
//     author: { name: '배낭여행자', profileImage: 'https://i.pravatar.cc/150?img=24' },
//     content: '동유럽 일주 배낭여행을 떠나고 싶어요 🎒',
//     createdAt: '2024-11-28T03:45:00',
//     likes: 29,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '25',
//     author: { name: '야경러버', profileImage: 'https://i.pravatar.cc/150?img=25' },
//     content: '싱가포르 마리나 베이 샌즈의 야경을 보고 싶어요 🌃',
//     createdAt: '2024-11-28T03:30:00',
//     likes: 33,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '26',
//     author: { name: '디저트러버', profileImage: 'https://i.pravatar.cc/150?img=26' },
//     content: '프랑스 파리의 디저트 카페들을 돌아보고 싶어요 🍰',
//     createdAt: '2024-11-28T03:15:00',
//     likes: 28,
//     isLiked: true,
//     replyCount: 0,
//     replies: [],
//   },
//   {
//     id: '27',
//     author: { name: '사막여행자', profileImage: 'https://i.pravatar.cc/150?img=27' },
//     content: '모로코 사하라 사막에서 별을 보고 싶어요 ⭐',
//     createdAt: '2024-11-28T03:00:00',
//     likes: 47,
//     isLiked: false,
//     replyCount: 0,
//     replies: [],
//   },
// ];
