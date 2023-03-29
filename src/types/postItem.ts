export type PostItem = {
  authorId: string;
  authorName: string;
  title: string;
  link: string;
  ogpPath: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
