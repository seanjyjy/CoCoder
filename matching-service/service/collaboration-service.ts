import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';

const URI_COLLAB_SVC = process.env.URI_COLLAB_SVC || 'http://localhost:8002';
const PREFIX_COLLAB_SVC = '/api/collaboration';
const URL_COLLAB_SVC = URI_COLLAB_SVC + PREFIX_COLLAB_SVC;

export const createCollabRoom = async (roomId: string, users: string[], difficulty: QuestionDifficulty) => {
  try {
    return await axios.post(URL_COLLAB_SVC + '/createRoom', {
      roomId,
      users,
      difficulty,
    });
  } catch (err) {
    console.log('creating  collabroom error');
    return;
  }
};
