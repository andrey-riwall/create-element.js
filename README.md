create-element.js

Usage:
-------------------

  <script src="/your/path/create-element.js"></script>
  <script type="text/javascript">
    createEl(); //default conf
  </script>

This func use default config.

-------------------
Configuration properties:
-------------------

  {
    tag: 'div', // default tag (string)
    append: document.body, // default append (dom)
    class: null, // default class is none (string)
    id: null, // default id is none (string)
    text: null, // default text is none (string)
  }