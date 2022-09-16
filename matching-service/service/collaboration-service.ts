import axios from 'axios';

const URI_COLLAB_SVC = process.env.URI_COLLAB_SVC || 'http://localhost:8002';

export const createCollabRoom = (roomId: string, users: string[]) => {
  return axios.post(URI_COLLAB_SVC + '/createRoom', {
    roomId,
    users,
  });
};
