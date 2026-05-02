/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "임효빈",
    nameEn: "LIM HYOBIN",
    father: "임병순",
    mother: "김순화",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "모수하",
    nameEn: "MO SOOHA",
    father: "모강현",
    mother: "김영순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-04",
    time: "12:50",
    venue: "아르베 웨딩홀",
    address: "서울특별시 강남구 봉은사로 302",
    tel: "02-564-7031",
    mapLinks: {
      kakao: "https://kko.to/GvT1BLVr3n",
      naver: "https://naver.me/GOPeOix0"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "임효빈", bank: "하나은행", number: "233-910461-58407" },
      { role: "아버지", name: "임병순", bank: "우리은행", number: "1002-342-183689" },
      { role: "어머니", name: "김순화", bank: "우리은행", number: "1002-755-914778" }
    ],
    bride: [
      { role: "신부", name: "모수하", bank: "신한은행", number: "110-472-496404" },
      { role: "아버지", name: "모강현", bank: "국민은행", number: "648401-01-453756" },
      { role: "어머니", name: "김영순", bank: "우리은행", number: "756-186-64102001" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "임효빈 ♥ 모수하 결혼합니다",
    description: "2026년 7월 4일, 소중한 분들을 초대합니다."
  }
};
