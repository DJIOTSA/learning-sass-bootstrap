# Sass Nested Rules

Sass allows you to nest CSS rules inside one another, making your code more organized and easier to read. Nested rules follow the hierarchy of your HTML, which simplifies your CSS structure and avoids repetitive code.

## Basic Nesting

In Sass, you can nest selectors inside other selectors to mimic the HTML structure. Here’s an example:

```scss
nav {
  background-color: #333;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
```

This will compile to:

```css
nav {
  background-color: #333;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
```

## Advantages of Nested Rules

- **Cleaner Code**: Nesting keeps your code DRY (Don’t Repeat Yourself) and more readable.
- **Logical Structure**: It follows the structure of your HTML, making the CSS easier to understand and maintain.
- **Scope Limitation**: It prevents styles from unintentionally affecting elements outside of their intended scope.

## Nesting with Pseudo-classes and Pseudo-elements

You can also nest pseudo-classes and pseudo-elements within their parent selectors:

```scss
button {
  background-color: blue;

  &:hover {
    background-color: darkblue;
  }

  &::before {
    content: ">";
  }
}
```

This compiles to:

```css
button {
  background-color: blue;
}
button:hover {
  background-color: darkblue;
}
button::before {
  content: ">";
}
```

## Avoid Over-Nesting

While nesting is a powerful feature, over-nesting can make your CSS overly complex and difficult to debug. A good rule of thumb is to avoid nesting more than 3 levels deep.

For more details, you can refer to the [Sass Guidelines](https://sass-guidelin.es/).
