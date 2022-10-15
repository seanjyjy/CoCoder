import axios from 'axios';

const URI_HISTORY_SVC = process.env.URI_HISTORY_SVC || 'http://localhost:8003';

export const getUserHistory = async (username: string | undefined) => {
    let name = username ? username : "";
    return await axios.get(`${URI_HISTORY_SVC}/api/history/${name}`)
    .catch((err) => console.log(err));
};
