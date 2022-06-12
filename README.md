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
    attribute: null, // default attributes (object)
    text: null, // default text is none (string; number)
  }
  ```

  Use ```null``` if you don't want to use this.

-------------------
Tag:
-------------------

  Tag value can be string;

  Only one value:
  ```javascript
  tag: 'div' // string;
  ```

-------------------
Parent:
-------------------

  Parent value can be dom;

  Only one value:
  ```javascript
  parent: document.querySelector('section') // dom;
  ```

-------------------
Attribute:
-------------------

  Attibute values can be: string; number; boolean;

  One attribute with value:
  ```javascript
  attribute: {
    class: 'name'
  }
  ```

  one attribute without value:
  ```javascript
  attribute: {
    required: true
  }
  ```

  many attributes with or without a value:
  ```javascript
  attribute: {
    class: 'heading',
    id: 'sectionHeading',
    tabindex: 1,
    required: true,
  },
  ```

-------------------
Text:
-------------------

  Text value can be: string; number;

  Only one value:
  ```javascript
  text: 'Lorem ipsum dolor sit amet.' // string;
  ```

-------------------
Example:
-------------------

  Create heading:
  ```html
  <script src="/your/path/create-element.js"></script>
  <script type="text/javascript">
    let sectionHeading = new CreateEl({
      tag: 'h1',
      parent: document.getElementById('section'),
      attribute: {
        class: 'heading',
        id: 'sectionHeading',
        style: 'color: blue; font-size: 32px',
      },
      text: 'Hello world',
    });
  </script>
  ```

  Result:
  ```html
  <h1 class="heading" id="sectionHeading" style="color: blue; font-size: 32px;">Hello world</h1>
  ```

-------------------
[Download](https://raw.githubusercontent.com/andrey-riwall/create-element.js/main/create-object.js)
-------------------