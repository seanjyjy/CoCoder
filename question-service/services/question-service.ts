import axios, { AxiosResponse } from 'axios';
import { LeetCodeInfo } from 'types';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import Questions from './fallback';

type TLeetCodeAxiosResponse = { data: { randomQuestion: LeetCodeInfo } };

function formatData(response: AxiosResponse<TLeetCodeAxiosResponse, any>) {
  return response.data.data.randomQuestion;
}

export async function fetchRandomLeetCodeQuestionWithFallback(difficulty: QuestionDifficulty) {
  let res: LeetCodeInfo;
  try {
    const data = await fetchRandomLeetCodeQuestion(difficulty);
    res = formatData(data);
  } catch {
    res = fetchRandomLeetCodeQuestionFromFallback(difficulty);
  }

  // if somehow we didnt go into catch and data is empty... mioght occur i think
  if (!Boolean(res.content)) {
    res = fetchRandomLeetCodeQuestionFromFallback(difficulty);
  }

  return res;
}

function fetchRandomLeetCodeQuestionFromFallback(difficulty: QuestionDifficulty) {
  const questions = Questions[difficulty];
  // for now we dont care if he did it before lol too much effort and coupling in want to access history-service!
  return questions[Math.floor(Math.random() * questions.length)];
}

async function fetchRandomLeetCodeQuestion(difficulty: QuestionDifficulty) {
  return await axios.post<TLeetCodeAxiosResponse>(
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
