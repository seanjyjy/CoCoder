import { ChangeEvent, useState } from 'react';

export default function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    handleChange,
    values,
  };
}
