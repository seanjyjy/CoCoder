import { ChangeEvent, useState } from 'react';

export default function useForm<T extends {}>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const clearForm = () => setValues(initialValues);

  return {
    handleChange,
    values,
    clearForm,
  };
}
