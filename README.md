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
    text: null, // default text is none (string; number; array;)
  }
  ```

  Use ```null``` if you don't want to use this.
  P.s. the ```tag``` and ```parent``` properties cannot be ```null```.

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

  Text value can be: string; number; array;

  One value:
  ```javascript
  text: 'Lorem ipsum dolor sit amet.' // string;
  ```

  Many values:
  ```javascript
  text: [
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit.',
    'Lorem ipsum dolor sit amet consectetur.'
  ]
  ```
  This construction will create many elements, the number of which is equal to the length of the text array. The elements will copy tag, attribute, parent. The array of created elements will be returned to the variable.

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