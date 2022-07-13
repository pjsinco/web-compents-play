// see https://github.com/mdn/web-components-examples/
//         blob/main/word-count-web-component/main.js
class WordCount extends HTMLParagraphElement {
  constructor() {
    super();

    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      const len = text.trim().split(/\s+/g).filter(a => a.trim().length > 0).length;
      console.log(len);
      return len;
    }

    const count = `Words: ${countWords(wcParent)}`;

    const shadow = this.attachShadow({ mode: 'open' });

    const text = document.createElement('span');
    text.textContent = count;

    shadow.appendChild(text);

    setInterval(function() {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

customElements.define('word-count', WordCount, { extends: 'p' });
