import { QuestionType } from 'src/types';

export const getSnippet = (question: QuestionType, lang: string) => {
  return question?.codeSnippets?.find((snippet) => snippet.lang === lang);
};

export const languages = ['C++', 'Java', 'JavaScript', 'Python', 'Python3', 'C', 'C#'];

export const getMode = (language: string) => {
  if (language === 'C++') {
    return 'text/x-c++src';
  }

  if (language === 'C') {
    return 'text/x-csrc';
  }

  if (language === 'C#') {
    return 'text/x-csharp';
  }

  if (language === 'Java') {
    return 'text/x-java';
  }

  if (language === 'Python' || language === 'Python3') {
    return 'text/x-python';
  }

  if (language === 'JavaScript') {
    return 'text/javascript';
  }

  return '';
};
