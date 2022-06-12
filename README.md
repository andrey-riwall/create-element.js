CREATE ELEMENT.js
===================

Usage:
-------------------

  ```html
  <script src="/your/path/create-element.js"></script>
  <script type="text/javascript">
    let element = new CreateEl(); //default conf
  </script>
  ```

This func use default config. The DOM element is returned to the variable.

-------------------
Default configuration properties:
-------------------

  ```javascript
  {
    tag: 'div', // default tag (string)
    parent: document.body, // default parent (dom)
    attribute: [
      null, null // default attributes (string or number; array(s) with string or number)
    ],
    text: null, // default text is none (string; number)
  }
  ```

-------------------
Attribute:
-------------------

  One attribute with value:
  ```javascript
  attribute: [
    'class', 'element'
  ]
  ```

  one attribute without value:
  ```javascript
  attribute: [
    'required'
  ]
  ```

  many attributes with or without a value:
  ```javascript
  attribute: [
    [ 'class', 'element' ],
    [ 'id', 21 ],
    'required'
  ]
  ```

-------------------
[Download](https://raw.githubusercontent.com/andrey-riwall/create-element.js/main/create-object.js)
-------------------