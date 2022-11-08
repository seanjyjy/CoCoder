import axios from 'axios';

const URI_HISTORY_SVC = (process.env.NODE_ENV === 'production' && process.env.URI_HISTORY_SVC) || 'http://localhost:8003';
const PREFIX_HISTORY_SVC = '/api/history';
const URL_HISTORY_SVC = URI_HISTORY_SVC + PREFIX_HISTORY_SVC;

export const deleteHistory = async (username: string) => {
  const data = await axios.delete<{ msg?: string; user: any }>(`${URL_HISTORY_SVC}/${username}`);
  if (data?.data?.msg) {
    // retry at most once
    await axios.delete<{ msg?: string; user: any }>(`${URL_HISTORY_SVC}/${username}`);
  }
};
