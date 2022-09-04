import { useState, useEffect } from 'react';
import { IUserInfo } from '../../../common/Models';
import { getCurrentUser } from 'src/services/UserService';

export default function useTokenLogin() {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function findUser() {
      await getCurrentUser()
        .then((res) => {
          console.log('/user', res);
          setUser(res.data.currentUser);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    findUser();
  }, []);

  return {
    user,
    setUser,
    isLoading,
  };
}
