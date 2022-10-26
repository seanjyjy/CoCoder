export const URI_USER_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8000';
export const PREFIX_USER_SVC = '/api/user';
export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

export const URI_MATCHING_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';
export const PREFIX_MATCHING_SVC = '/api/matching';
export const URL_MATCHING_SVC = URI_MATCHING_SVC + PREFIX_MATCHING_SVC;

export const URI_COLLABORATION_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8002';
export const PREFIX_COLLABORATION_SVC = '/api/collaboration';
export const URL_COLLABORATION_SVC = URI_COLLABORATION_SVC + PREFIX_COLLABORATION_SVC;

export const URI_HISTORY_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8003';
export const PREFIX_HISTORY_SVC = '/api/history';
export const URL_HISTORY_SVC = URI_HISTORY_SVC + PREFIX_HISTORY_SVC;

export const URI_QUESTION_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8004';
export const PREFIX_QUESTION_SVC = '/api/question';
export const URL_QUESTION_SVC = URI_QUESTION_SVC + PREFIX_QUESTION_SVC;

export const URI_COMMUNICATION_SVC = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8005';
export const PREFIX_COMMUNICATION_SVC = '/api/communication';
export const URL_COMMUNICATION_SVC = URI_COMMUNICATION_SVC + PREFIX_COMMUNICATION_SVC;
