export type TCodeSnippets = {
  lang?: string;
  langSlug?: string;
  code?: string;
};

export type LeetCodeInfo = {
  questionId?: string;
  title?: string;
  titleSlug?: string;
  content?: string;
  difficulty?: string;
  categoryTitle?: string;
  codeSnippets: TCodeSnippets[];
  metaData: string;
};
