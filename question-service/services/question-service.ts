import axios from 'axios';
import { LeetCodeInfo } from 'types';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import Questions from './fallback';

export async function fetchRandomLeetCodeQuestionWithFallback(difficulty: QuestionDifficulty) {
  let data;
  try {
    data = await fetchRandomLeetCodeQuestion(difficulty);
    return data;
  } catch {
    data = fetchRandomLeetCodeQuestionFromFallback(difficulty);
  }
  // TODO(sean): think of the formatter later
  return data;
}

export async function fetchRandomLeetCodeQuestionFromFallback(difficulty: QuestionDifficulty) {
  const questions = Questions[difficulty];
  // for now we dont care if he did it before lol too much effort and coupling in want to access history-service!
  return questions[Math.floor(Math.random() * questions.length)];
}

export async function fetchRandomLeetCodeQuestion(difficulty: QuestionDifficulty) {
  return await axios.post<LeetCodeInfo>(
    'https://leetcode.com/graphql',
    {
      query: `query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) {
        randomQuestion(categorySlug: $categorySlug, filters: $filters) {
          questionId
          title
          titleSlug
          content
          difficulty
          categoryTitle
          codeSnippets {
            lang
            langSlug
            code
          }
          metaData
        }
      }
      `,
      variables: {
        categorySlug: 'Algorithms',
        filters: {
          difficulty: difficulty.toUpperCase(),
        },
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
    { timeout: 3000 }
  );
}
