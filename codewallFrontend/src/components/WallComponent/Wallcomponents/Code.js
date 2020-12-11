import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../../../style/prism.css'
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-r';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-visual-basic';
import 'prismjs/components/prism-solidity'

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