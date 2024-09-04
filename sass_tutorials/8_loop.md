# Sass Loops

Sass loops allow you to automate repetitive tasks in your stylesheets, making your CSS more dynamic and maintainable. Sass provides several loop types, including `@for`, `@each`, and `@while`, each suited to different scenarios.

## `@for` Loop

The `@for` loop runs a block of code a specific number of times. It’s useful when you need to create patterns or styles that follow a sequence.

### Syntax:

```scss
@for $i from <start> through <end> {
  // styles
}
```

### Example:

```scss
@for $i from 1 through 3 {
  .column-#{$i} {
    width: 100% / $i;
  }
}
```

This will generate:

```css
.column-1 {
  width: 100%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 33.3333%;
}
```

### Using `to` Instead of `through`

You can also use `to` instead of `through`, which excludes the last number in the loop:

```scss
@for $i from 1 to 4 {
  .box-#{$i} {
    width: 25% * $i;
  }
}
```

This generates:

```css
.box-1 {
  width: 25%;
}
.box-2 {
  width: 50%;
}
.box-3 {
  width: 75%;
}
```

## `@each` Loop

The `@each` loop iterates over a list, map, or set of variables, making it ideal for looping through collections of related values.

### Example with Lists:

```scss
$colors: red, green, blue;

@each $color in $colors {
  .text-#{$color} {
    color: $color;
  }
}
```

This will generate:

```css
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.text-blue {
  color: blue;
}
```

### Example with Maps:

```scss
$sizes: (small: 12px, medium: 16px, large: 20px);

@each $name, $size in $sizes {
  .text-#{$name} {
    font-size: $size;
  }
}
```

This will generate:

```css
.text-small {
  font-size: 12px;
}
.text-medium {
  font-size: 16px;
}
.text-large {
  font-size: 20px;
}
```

## `@while` Loop

The `@while` loop continues to run as long as a specified condition is true. This loop is less commonly used but is helpful for more complex conditions.

### Example:

```scss
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 100px * $i;
  }
  $i: $i - 1;
}
```

This will generate:

```css
.item-6 {
  width: 600px;
}
.item-5 {
  width: 500px;
}
.item-4 {
  width: 400px;
}
.item-3 {
  width: 300px;
}
.item-2 {
  width: 200px;
}
.item-1 {
  width: 100px;
}
```

## Conclusion

Sass loops provide a powerful way to automate repetitive styling tasks, making your CSS cleaner and more maintainable. Whether you’re dealing with sequences, collections, or conditional loops, Sass has a loop structure that fits your needs.

For more details, you can refer to the official [Sass documentation](https://sass-lang.com/documentation/style-rules/loops).