import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/vsDark';
import { useState } from 'react';

const CustomCode = ({
  plainText: children,
  className,
  language,
  highlight,
}) => {
  if (!children) return null
  const lang =
  language || className?.replace(/language-/, '') || ('bash');

  const getTokenSetup = ({ getTokenProps, token, key }) => {
    const tokenProps = getTokenProps({ token, key });
    if (highlight && highlight.includes(token.content)) {
      return <p>{token.content}</p>;
    }
    return <span key={key} {...tokenProps} />;
  };

  const Button = (props) => (
    <button
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        border: 'none',
        boxShadow: 'none',
        textDecoration: 'none',
        margin: '8px',
        padding: '8px 12px',
        background: '#E2E8F022',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        lineHeight: '1',
      }}
      {...props}
    />
  );

  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={lang}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '2rem', position: 'relative' }}
        >
          <Button
            onClick={() => {
              copyToClipboard(children);
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 3000);
            }}
          >
            {isCopied ? '🎉 Copied!' : 'Copy'}
          </Button>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) =>
                getTokenSetup({ getTokenProps, token, key })
              )}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
export default CustomCode;