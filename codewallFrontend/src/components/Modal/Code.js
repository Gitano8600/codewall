import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../../style/prism.css'
import 'prismjs/components/prism-python';

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}