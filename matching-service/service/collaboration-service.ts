import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';

const URI_COLLAB_SVC = process.env.URI_COLLAB_SVC || 'http://localhost:8002';

export const createCollabRoom = async (roomId: string, users: string[], difficulty: QuestionDifficulty) => {
  try {
    return await axios.post(URI_COLLAB_SVC + '/createRoom', {
      roomId,
      users,
      difficulty,
    });
  } catch (err) {
    console.log('creating  collabroom error');
    return;
  }
};
