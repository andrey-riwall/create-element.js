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
Configuration properties:
-------------------

  ```javascript
  {
    tag: 'div', // default tag (string)
    parent: document.body, // default parent (dom)
    attribute: [
      null, null // default attributes (array with string or number; array with (array with string or number))
    ],
    text: null, // default text is none (string; number)
  }
  ```

-------------------
Attribute:
-------------------

  ```javascript
  // one attribute with value
  attribute: [
    'class', 'element'
  ]

  // one attribute without value
  attribute: [
    'required'
  ]
  
  // many attributes with or without a value
  attribute: [
    [ 'class', 'element' ],
    [ 'id', 21 ],
    'required'
  ]
  ```

-------------------
[Download](https://raw.githubusercontent.com/andrey-riwall/create-element.js/main/create-object.js)
-------------------