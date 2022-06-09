CREATE ELEMENT.js
===================

Usage:
-------------------

  ```html
  <script src="/your/path/create-element.js"></script>
  <script type="text/javascript">
    let item = createEl(); //default conf
  </script>
  ```

This func use default config. The DOM element is returned to the variable.

-------------------
Configuration properties:
-------------------

  ```javascript
  {
    tag: 'div', // default tag (string)
    append: document.body, // default append (dom)
    class: null, // default class is none (string)
    id: null, // default id is none (string)
    text: null, // default text is none (string)
  }
  ```

-------------------
[Download](https://raw.githubusercontent.com/andrey-riwall/create-element.js/main/create-object.js)
<a href='https://raw.githubusercontent.com/andrey-riwall/create-element.js/main/create-object.js' download>Download</a>
-------------------