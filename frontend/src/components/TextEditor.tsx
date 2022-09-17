import { useEffect, useState } from 'react';

type TextEditorProps = {
  text: string;
  onTextChange: any;
};

export default function TextEditor(props: TextEditorProps) {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const handleChange = (e: any) => {
    props.onTextChange(e.target.value);
  };
  return <textarea onInput={(e) => handleChange(e)} value={text} />;
}
