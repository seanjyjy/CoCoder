import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeEditorAsImageProps = {
  code: string;
  language: string;
};

const CodeEditorAsImage = ({ code, language }: CodeEditorAsImageProps) => {
  return (
    <div className="editorAsImage">
      <SyntaxHighlighter language={language.toLowerCase()} style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditorAsImage;
