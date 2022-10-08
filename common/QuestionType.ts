export type codeSnippet = {
  lang: string;
  langSlug: string;
  code: string;
};

export type QuestionType = {
  categoryTitle: string;
  codeSnippets: codeSnippet[];
  content: string;
  difficulty: string;
  metaData: string;
  questionId: string;
  title: string;
  titleSlug: string;
};
