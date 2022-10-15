import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeEditorAsImageProps = {
  code: string;
  language: string;
};

const convertToSyntaxLanguage = (language: string) => {
  if (language === 'JavaScript' || language === 'Java' || language === 'C') {
    return language.toLowerCase();
  }
  if (language === 'Python3' || language === 'Python') {
    return 'python';
  }

  if (language === 'C#') {
    return 'csp';
  }

  if (language === 'C++') {
    return 'cpp';
  }

  return language;
};

const CodeEditorAsImage = ({ code, language }: CodeEditorAsImageProps) => {
  return (
    <div className="editorAsImage">
      <SyntaxHighlighter language={convertToSyntaxLanguage(language)} style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditorAsImage;
