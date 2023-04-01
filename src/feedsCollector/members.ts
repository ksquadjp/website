import type { Member } from "@types";

export const members: Member[] = [
  {
    id: "Ksquad Official",
    name: "Ksquad",
    role: "公式",
    bio: "Ksquad",
    avatarSrc: "/icons/favicon32.png",
    websiteUrl: "https://ksquad.jp",
    sources: ["https://ksquad.jp/rss.xml"],
  },
  {
    id: "Ryuichi Umehara",
    name: "梅原 隆一",
    role: "業務委託メンバー",
    bio: "京都大学情報学研究科M1",
    avatarSrc: "https://pbs.twimg.com/profile_images/1307941138297311232/McTtMOUI_200x200.jpg",
    sources: ["https://qiita.com/ryuichiastrona/feed"],
    twitterUsername: "@astrona0626",
    githubUsername: "umepon0626",
    websiteUrl: "https://qiita.com/ryuichiastrona",
    includeUrlRegex: "^.+/e213c6a11f5b43821aab$",
  },
];
