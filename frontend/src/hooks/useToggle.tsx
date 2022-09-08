import { useState } from 'react';

export default function useToggle(initialState: boolean) {
  const [toggle, setToggle] = useState(initialState);

  const flipToggle = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, flipToggle };
}
